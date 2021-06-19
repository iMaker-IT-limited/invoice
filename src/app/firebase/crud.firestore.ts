import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";

import { Observable, of, forkJoin, throwError, combineLatest } from "rxjs";
import { map, concatMap, first, filter } from "rxjs/operators";
import dayjs from "dayjs";
import * as firebase from "firebase";
import { DataStore, ShellModel } from "../shell/data-store";

import { FirebaseListingItemModel } from "./listing/firebase-listing.model";
import {
    FirebaseRoleModel,
    FirebaseSupplierModel,
    FirebaseUserModel,
    FirebaseSkillModel,
    FirebaseCombinedUserModel,
    FirebaseEnquiryModel
} from "./user/firebase-user.model";
import { UserImageModel } from "./user/select-image/user-image.model";

import { Query, QueryFn } from "@angular/fire/firestore";

@Injectable()
export class FirebaseService {
    // Listing Page
    private listingDataStore: DataStore<Array<FirebaseListingItemModel>>;
    // User Details Page
    private combinedUserDataStore: DataStore<FirebaseCombinedUserModel>;
    private relatedUsersDataStore: DataStore<Array<FirebaseListingItemModel>>;
    // Select User Image Modal
    private avatarsDataStore: DataStore<Array<UserImageModel>>;

    constructor(private afs: AngularFirestore) { }

    /*
      Firebase User Listing Page
    */
    public getListingDataSource(): Observable<Array<FirebaseListingItemModel>> {
        return this.afs
            .collection<FirebaseListingItemModel>("users")
            .valueChanges({ idField: "id" })
            .pipe(
                map(actions =>
                    actions.map(user => {
                        const age = this.calcUserAge(user.birthdate);
                        return { age, ...user } as FirebaseListingItemModel;
                    })
                )
            );
    }

    public getAListingDataSource() {
        return this.afs
            .collection("banners")
            .valueChanges({ idField: "id" })
            .pipe(
                map(actions =>
                    actions.map(user => {
                        // const age = this.calcUserAge(user.birthdate);
                        return { user };
                    })
                )
            );
    }

    public getListingStore(
        dataSource: Observable<Array<FirebaseListingItemModel>>
    ): DataStore<Array<FirebaseListingItemModel>> {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel: Array<FirebaseListingItemModel> = [
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel()
            ];

            this.listingDataStore = new DataStore(shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }

    public getAListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel: Array<FirebaseListingItemModel> = [
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel(),
                new FirebaseListingItemModel()
            ];

            this.listingDataStore = new DataStore(shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    // Filter users by age
    public searchUsersByAge(
        lower: number,
        upper: number
    ): Observable<Array<FirebaseListingItemModel>> {
        // we save the dateOfBirth in our DB so we need to calc the min and max dates valid for this query
        const minDate = dayjs(Date.now())
            .subtract(upper, "year")
            .unix();
        const maxDate = dayjs(Date.now())
            .subtract(lower, "year")
            .unix();

        const listingCollection = this.afs.collection<FirebaseListingItemModel>(
            "users",
            ref =>
                ref
                    .orderBy("birthdate")
                    .startAt(minDate)
                    .endAt(maxDate)
        );

        return listingCollection.valueChanges({ idField: "id" }).pipe(
            map(actions =>
                actions.map(user => {
                    const age = this.calcUserAge(user.birthdate);
                    return { age, ...user } as FirebaseListingItemModel;
                })
            )
        );
    }

    public searchUsers() {
        const listingCollection = this.afs.collection("Suppliers");

        return listingCollection.valueChanges({ idField: "id" }).pipe(
            map(actions =>
                actions.map(user => {
                    //   const age = this.calcUserAge(user["birthdate"]);
                    return { ...user };
                })
            )
        );
        // const listingCollection = this.afs.collection("users");

        // return listingCollection.valueChanges({ idField: "id" }).pipe(
        //   map(actions =>
        //     actions.map(user => {
        //      const age = this.calcUserAge(user["birthdate"]);
        //       return { age, ...user } as FirebaseListingItemModel;
        //     })
        //   )
        // );
    }

    //
    /*
      Firebase User Details Page
    */
    // Concat the userData with the details of the userSkills (from the skills collection)
    public getCombinedUserDataSource(
        userId: string
    ): Observable<FirebaseCombinedUserModel> {
        return this.getUser(userId).pipe(
            // Transformation operator: Map each source value (user) to an Observable (combineDataSources | throwError) which
            // is merged in the output Observable
            concatMap(user => {
                if (user && user.skills) {
                    // Map each skill id and get the skill data as an Observable
                    const userSkillsObservables: Array<Observable<
                        FirebaseSkillModel
                    >> = user.skills.map(skill => {
                        return this.getSkill(skill).pipe(first());
                    });

                    // Combination operator: Take the most recent value from both input sources (of(user) & forkJoin(userSkillsObservables)),
                    // and transform those emitted values into one value ([userDetails, userSkills])
                    return combineLatest([
                        of(user),
                        forkJoin(userSkillsObservables)
                    ]).pipe(
                        map(
                            ([userDetails, userSkills]: [
                                FirebaseUserModel,
                                Array<FirebaseSkillModel>
                            ]) => {
                                // Spread operator (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
                                return {
                                    ...userDetails,
                                    skills: userSkills
                                } as FirebaseCombinedUserModel;
                            }
                        )
                    );
                } else {
                    // Throw error
                    return throwError("User does not have any skills.");
                }
            })
        );
    }

    public getCombinedUserStore(
        dataSource: Observable<FirebaseCombinedUserModel>
    ): DataStore<FirebaseCombinedUserModel> {
        // Initialize the model specifying that it is a shell model
        const shellModel: FirebaseCombinedUserModel = new FirebaseCombinedUserModel();

        this.combinedUserDataStore = new DataStore(shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.combinedUserDataStore.load(dataSource);

        return this.combinedUserDataStore;
    }

    // tslint:disable-next-line:max-line-length
    public getRelatedUsersDataSource(
        combinedUserDataSource: Observable<FirebaseCombinedUserModel & ShellModel>
    ): Observable<Array<FirebaseListingItemModel>> {
        return combinedUserDataSource.pipe(
            // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
            filter(user => !user.isShell),
            concatMap(user => {
                if (user && user.skills) {
                    // Get all users with at least 1 skill in common
                    const relatedUsersObservable: Observable<Array<
                        FirebaseListingItemModel
                    >> = this.getUsersWithSameSkill(user.id, user.skills);

                    return relatedUsersObservable;
                } else {
                    // Throw error
                    return throwError("Could not get related user");
                }
            })
        );
    }

    public getRelatedUsersStore(
        dataSource: Observable<Array<FirebaseListingItemModel>>
    ): DataStore<Array<FirebaseListingItemModel>> {
        // Initialize the model specifying that it is a shell model
        const shellModel: Array<FirebaseListingItemModel> = [
            new FirebaseListingItemModel(),
            new FirebaseListingItemModel(),
            new FirebaseListingItemModel()
        ];

        this.relatedUsersDataStore = new DataStore(shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.relatedUsersDataStore.load(dataSource);

        return this.relatedUsersDataStore;
    }

    /*
      Firebase Create User Modal
    */
    public createUser(userData: FirebaseUserModel): Promise<DocumentReference> {
        return this.afs.collection("users").add({ ...userData });
    }

    /*
      Firebase Update User Modal
    */
    public updateUser(userData: FirebaseUserModel): Promise<void> {
        return this.afs
            .collection("users")
            .doc(userData.id)
            .set(userData);
    }

    public deleteUser(userKey: string): Promise<void> {
        return this.afs
            .collection("users")
            .doc(userKey)
            .delete();
    }

    /*
      Firebase Create User Modal
    */
    public countClick(impression) {
        // return this.afs.collection("Impression").add({ ...impression });
        return this.afs
            .collection("Impression")
            .doc(impression.provider)
            .collection(impression.coursename)
            .add(impression);
    }

    /*
      Firebase Update User Modal
    */
    public updatecountClick(impression) {
        const count = impression[0].impression;
        const provider = impression[0].provider;
        const coursename = impression[0].coursename;
        console.log(impression, count, provider, coursename);

        const db = firebase.firestore();
        const increment = firebase.firestore.FieldValue.increment(count);
        const bookingRef = db.collection("Impression").doc(
            provider
                .toString()
                .concat("_")
                .concat(coursename.toString())
        );
        // .collection(coursename)
        // .doc(impression[0].coursename);

        const batch = db.batch();
        batch.set(bookingRef, { Count: increment }, { merge: true });
        return batch.commit();
    }

    // /*
    // create enquiry data and send email to notify potential suppliers
    // */
    // public createEnquiry(userData: FirebaseEnquiryModel): Promise<void> {
    //   return (
    //     this.afs
    //       .collection("QuotationEnquiry")
    //       .doc(userData.timestamp)
    //       .set({ ...userData })
    //   );
    // }


    //  this.db
    //   .collection("contactlist")
    //   .doc('testbyIMaker')
    //   //     .update({ downloadURL: this.downloadURL, path });
    //   .set({ downloadURL: this.downloadURL, path });
    /*
  create enquiry data and send email to notify potential suppliers
  TURN ALL DATA TO STRING FORMAT FORM EXPORTING TO GOOGLE SHEET 
  */
    public getCSVImport() {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("contactlist")
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            // const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { ...data };
                        });
                    })
                )
        );
    }



    /*
  create enquiry data and send email to notify potential suppliers
  TURN ALL DATA TO STRING FORMAT FORM EXPORTING TO GOOGLE SHEET 
  */
    public createEnquiry(userData: FirebaseEnquiryModel): Promise<void> {
        return (
            this.afs
                //      .collection(userData.role.concat("Profile"))
                .collection("QuotationEnquiry")
                .doc(userData.timestamp.toString())
                .set({ ...userData })
        );
        // return this.afs.collection("teachers").add({ ...userData });
    }

    /*
    update enquiry status
    */
    public updateEnquiryonRead(userData): Promise<void> {
        return (
            this.afs
                //      .collection(userData.role.concat("Profile"))
                .collection("QuotationEnquiry")
                .doc(userData.timestamp)
                .update({ ...userData })
        );
        // return this.afs.collection("teachers").add({ ...userData });
    }

    /* 
    Get a specific teacher's enquiry
    */
    public getEnquiryToTeacher(userId: string, number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("QuotationEnquiry", ref =>
                    ref.where("id", "==", userId).limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    /* 
    Get a specific potential supplier's enquiry
    */
    public getEnquiryToPotentialSuppliers(userId: string) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("QuotationEnquiry", ref =>
                    ref.where("potential_supplier", "==", userId)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    /* 
  Get a specific potential supplier's enquiry
  */
    public getEnquiryToPotentialSuppliersByTimestamp(timestamp) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("QuotationEnquiry", ref =>
                    ref.where("timestamp", "==", timestamp)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    /*
    Get SQ to teacher
    */
    public getSalesQuotationToTeacher(userId: string) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("SalesQuotation", ref =>
                    ref.where("sendeeId", "==", userId)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    /*
  Update SQ status (is read to supplier)
    */
    public updateSalesQuotationOnReadToSupplier(sq, docId: string) {
        return this.afs.doc("SalesQuotation/" + docId).update({ isRead: true });
        // .collection("SalesQuotation"
        // )
        // .snapshotChanges()
        // .pipe(
        //   map(actions => {
        //     const id = actions.payload.id;
        //     const data = actions.payload.data();
        //     // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
        //     return { ...data };
        //   })
        // )
    }

    /*
  Update Quotation Enquiry status (is accepted or rejected by supplier)
  would be better if timestamp_potential_supplier
  */
    public acceptQuotationEnquiry(timestamp, accept: boolean) {
        return this.afs
            .doc("QuotationEnquiry/" + timestamp)
            .update({ isAccepted: accept });
        // .collection("SalesQuotation"
        // )
        // .snapshotChanges()
        // .pipe(
        //   map(actions => {
        //     const id = actions.payload.id;
        //     const data = actions.payload.data();
        //     // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
        //     return { ...data };
        //   })
        // )
    }
    public rejectQuotationEnquiry(timestamp, accept: boolean) {
        return this.afs.doc("QuotationEnquiry/" + timestamp).delete();
        // .collection("SalesQuotation"
        // )
        // .snapshotChanges()
        // .pipe(
        //   map(actions => {
        //     const id = actions.payload.id;
        //     const data = actions.payload.data();
        //     // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
        //     return { ...data };
        //   })
        // )
    }

    public onGetSalesQuotationToSupplier(supplierId: string, number: number) {
        return (
            this.afs
                // better if sendee_timestamp_potentail_supplier
                .collection("SalesQuotation", ref =>
                    ref.where("supplier_uid", "==", supplierId)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    public onGetThatSalesQuotationToSupplier(timestamp, number: number) {
        return (
            this.afs
                // better if sendee_timestamp_potentail_supplier
                .collection("SalesQuotation", ref =>
                    ref.where("sendee_timestamp", "==", timestamp)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }
    /*
     Assign role to user
    */
    public assignRole(userData: FirebaseRoleModel): Promise<void> {
        return (
            this.afs
                //      .collection(userData.role.concat("Profile"))
                .collection("Profiles")
                .doc(userData.id)
                .set({ ...userData })
        );
        // return this.afs.collection("teachers").add({ ...userData });
    }

    /*
    Get the role of a specific user
    */
    public getRole(userId: string) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("Profiles", ref => ref.where("id", "==", userId))
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }
    /*
    Firebase Create Supplier Modal
  */
    public createSupplier(userData: FirebaseSupplierModel): Promise<void> {
        return this.afs
            .collection("Suppliers")
            .doc(userData.email)
            .set({ ...userData });
        // return this.afs.collection("suppliers").add({ ...userData });
    }

    /*
  Create Item Modal/ Read/ Update/ Delete
  */
    public createContacts(contactData): Promise<void> {
        return this.afs
            .collection("Contacts")
            .doc(contactData.customer_email)
            .set({ ...contactData });
        // return this.afs.collection("suppliers").add({ ...userData });
    }
    /*
  Create Item Modal/ Read/ Update/ Delete
  */
    public createItems(itemData): Promise<void> {
        return this.afs
            .collection("Items")
            .doc(itemData.name)
            .set({ ...itemData });
        // return this.afs.collection("suppliers").add({ ...userData });
    }

    /*
  Create Item Modal/ Read/ Update/ Delete
  */
    public createQuotes(quoteData): Promise<void> {
        return this.afs
            .collection("Quotes")
            .doc(quoteData.name)
            .set({ ...quoteData });
        // return this.afs.collection("suppliers").add({ ...userData });
    }


    /*
  Create Item Modal/ Read/ Update/ Delete
  */
    public createInvoices(invoiceData): Promise<void> {
        return this.afs
            .collection("Invoices")
            .doc(invoiceData.invoice)
            .set({ ...invoiceData });
        // return this.afs.collection("suppliers").add({ ...userData });
    }
    /*
      Firebase Update User Modal
    */
    public updateSupplier(logo, userData: FirebaseSupplierModel): Promise<void> {
        return (
            this.afs
                .collection("suppliers")
                .doc(userData.id)
                // .set(userData);
                .update(logo)
        );
    }

    public deleteSupplier(userKey: string): Promise<void> {
        return this.afs
            .collection("suppliers")
            .doc(userKey)
            .delete();
    }
    /*
      Firebase Select User Image Modal
    */
    public getAvatarsDataSource(): Observable<Array<UserImageModel>> {
        return this.afs.collection<UserImageModel>("avatars").valueChanges();
    }

    public getAvatarsStore(
        dataSource: Observable<Array<UserImageModel>>
    ): DataStore<Array<UserImageModel>> {
        // Use cache if available
        if (!this.avatarsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel: Array<UserImageModel> = [
                new UserImageModel(),
                new UserImageModel(),
                new UserImageModel(),
                new UserImageModel(),
                new UserImageModel()
            ];

            this.avatarsDataStore = new DataStore(shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.avatarsDataStore.load(dataSource);
        }
        return this.avatarsDataStore;
    }

    /*
      FireStore utility methods
    */
    // Get list of all available Skills (used in the create and update modals)
    public getSkills(): Observable<Array<FirebaseSkillModel>> {
        return this.afs
            .collection<FirebaseSkillModel>("skills")
            .valueChanges({ idField: "id" });
    }

    // Get data of a specific Skill
    private getSkill(skillId: string): Observable<FirebaseSkillModel> {
        return this.afs
            .doc<FirebaseSkillModel>("skills/" + skillId)
            .snapshotChanges()
            .pipe(
                map(a => {
                    const data = a.payload.data();
                    const id = a.payload.id;
                    return { id, ...data } as FirebaseSkillModel;
                })
            );
    }

    // Get data of all suppliers  created from website
    getAllSupplier() {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("Suppliers", ref => ref.orderBy("average_speed").limit(25))
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    // Get data of all suppliers created from google sheet
    getAllGoogleSheetSupplier(number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("SupplierList", ref =>
                    ref
                        // .orderBy("average_speed")
                        .limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    // Get data of all suppliers created from google sheet
    getGoogleSheetSupplierFromCourse(value: string) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection(
                    "SupplierList",
                    ref => ref.where("provider", "==", value)
                    // .orderBy("average_speed")
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }
    // Get data of a specific suppliers
    getThatSupplier(userId: string) {
        return this.afs
            .doc<FirebaseSupplierModel>("SupplierList/" + userId)
            .snapshotChanges()
            .pipe(
                map(a => {
                    const userData = a.payload.data();
                    const id = a.payload.id;
                    return { id, ...userData };
                })
            );
    }

    getFilteredSupplierListInput(value) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("suppliers", ref =>
                    ref
                        .where(value, "==", true)
                        .orderBy("average_speed")
                        .orderBy("reply_rate")
                        .limit(10)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    getEditorPickedSupplierList(number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("Suppliers", ref =>
                    ref
                        .where("editor_choice", "==", "true")
                        // .where(value, "==", true)
                        // .orderBy("reply_rate", "desc")
                        // .orderBy("average_speed", "asc")
                        .limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }
    getEditorPickedGoogleSupplierList(number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("SupplierList", ref =>
                    ref
                        .where("editor_choice", "==", true)
                        // .where(value, "==", true)
                        // .orderBy("reply_rate", "desc")
                        // .orderBy("average_speed", "asc")
                        .limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    // filtered by cate return cate_1 if STEM => :true, ...
    getFilteredCateSupplierList(value: any, number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("Suppliers", ref =>
                    ref
                        .where(value, "==", true)
                        .orderBy("reply_rate", "desc")
                        .orderBy("average_speed", "asc")
                        .limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    getFilteredSupplierList(value: any, number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("Suppliers", ref =>
                    ref
                        .where(value, "==", true)
                        .orderBy("reply_rate", "desc")
                        .orderBy("average_speed", "asc")
                        .limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }
    // filtered supplier from google sheet 'SupplierList'
    getFilteredGoogleSupplierList(value: any, number: number) {
        return this.afs
            .collection("SupplierList", ref =>
                ref
                    .where("hashtag", "==", value)
                    // .orderBy("reply_rate", "desc")
                    // .orderBy("average_speed", "asc")
                    .limit(number)
            )
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const id = a.payload.doc.id;
                        const data = a.payload.doc.data();
                        return { id, ...data };
                    });
                })
            );
    }

    // filtered courses from google sheet 'CourseList'
    // database imported from google sheet 'SuppliersList'
    getSearchSupplierListByCate(value: any, number: number) {
        return this.afs
            .collection(
                "CourseList",
                ref => ref.where("cate", "==", value).limit(number)
                // .startAt(value)
            )
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const id = a.payload.doc.id;
                        const data = a.payload.doc.data();
                        return { id, ...data };
                    });
                })
            );
    }


    // filtered courses from google sheet 'CourseList'
    // database imported from google sheet 'SuppliersList'
    getSearchSupplierListByKeyword(value: any, number: number) {
        return this.afs
            .collection("CourseList", ref =>
                ref.where("keyword", "==", value).limit(number)
            )
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const id = a.payload.doc.id;
                        const data = a.payload.doc.data();
                        return { id, ...data };
                    });
                })
            );
    }

    // filtered courses from google sheet 'CourseList'
    // database imported from google sheet 'SuppliersList'
    /* form format
    subcate: "mBot"
    class_size: { lower: 1, upper: 42 }
    target_user_age: { lower: 1, upper: 16 }
    class_length: { lower: 1, upper: 42 }
    teaching_materials: ""
    */
    getSearchSupplierListByForm(value: any, number: number, enquiry: any) {
        return this.afs
            .collection("CourseList", ref =>
                ref
                    .where("subcate", "==", value)
                    // .where("class_size_upper", ">=", enquiry.class_size.lower)
                    // ** filter range in one field only, thie following can only be done in client side
                    // .where("class_length_upper", ">=", enquiry.class_length.lower)
                    // .where("target_user_age_upper", ">=", enquiry.target_user_age.lower)
                    .limit(number)
            )
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const id = a.payload.doc.id;
                        const data = a.payload.doc.data();
                        return { id, ...data };
                    });
                })
            );
    }

    getSearchSupplierListBySubcate(value: any, number: number, enquiry: any) {
        return this.afs
            .collection("CourseList", ref =>
                ref
                    .where("subcate", "==", value)
                    .limit(number)
            )
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const id = a.payload.doc.id;
                        const data = a.payload.doc.data();
                        return { id, ...data };
                    });
                })
            );
    }

    // filtered courses from google sheet 'CourseList'
    // database imported from google sheet 'SuppliersList'
    getSearchSupplierListByKEYWORDARR(value: any, number: number) {
        return this.afs
            .collection("CourseList", ref =>
                ref.where("KEYWORD_ARR", "array-contains", value).limit(number)
            )
            .snapshotChanges()
            .pipe(
                map(actions => {
                    return actions.map(a => {
                        const id = a.payload.doc.id;
                        const data = a.payload.doc.data();
                        return { id, ...data };
                    });
                })
            );
    }
    // get hashtags from firestore
    getHashTagforSearchSupplierList(number: number) {
        return (
            this.afs
                // .doc<FirebaseUserModel>("users/" + userId)
                .collection("SearchQueryList", ref =>
                    ref.where("queryArr", "==", true).limit(number)
                )
                .snapshotChanges()
                .pipe(
                    map(actions => {
                        return actions.map(a => {
                            // const userData = a.payload.data();
                            const id = a.payload.doc.id;
                            const data = a.payload.doc.data();
                            // const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                            return { id, ...data };
                        });
                    })
                )
        );
    }

    // Get data of a specific User
    private getUser(userId: string): Observable<FirebaseUserModel> {
        return this.afs
            .doc<FirebaseUserModel>("users/" + userId)
            .snapshotChanges()
            .pipe(
                map(a => {
                    const userData = a.payload.data();
                    const id = a.payload.id;
                    const age = userData ? this.calcUserAge(userData.birthdate) : 0;
                    return { id, age, ...userData } as FirebaseUserModel;
                })
            );
    }

    // Get all users who share at least 1 skill of the user's 'skills' list
    private getUsersWithSameSkill(
        userId: string,
        skills: Array<FirebaseSkillModel>
    ): Observable<Array<FirebaseListingItemModel>> {
        // Get the users who have at least 1 skill in common
        // Because firestore doesn't have a logical 'OR' operator we need to create multiple queries, one for each skill from the 'skills' list
        const queries = skills.map(skill => {
            return this.afs
                .collection("users", ref =>
                    ref.where("skills", "array-contains", skill.id)
                )
                .valueChanges({ idField: "id" });
        });

        // Combine all these queries
        return combineLatest(queries).pipe(
            map((relatedUsers: FirebaseListingItemModel[][]) => {
                // Flatten the array of arrays of FirebaseListingItemModel
                const flattenedRelatedUsers = ([] as FirebaseListingItemModel[]).concat(
                    ...relatedUsers
                );

                // Removes duplicates from the array of FirebaseListingItemModel objects.
                // Also remove the original user (userId)
                const filteredRelatedUsers = flattenedRelatedUsers.reduce(
                    (accumulatedUsers, user) => {
                        if (
                            accumulatedUsers.findIndex(
                                accumulatedUser => accumulatedUser.id === user.id
                            ) < 0 &&
                            user.id !== userId
                        ) {
                            return [...accumulatedUsers, user];
                        } else {
                            // If the user doesn't pass the test, then don't add it to the filtered users array
                            return accumulatedUsers;
                        }
                    },
                    [] as FirebaseListingItemModel[]
                );

                return filteredRelatedUsers;
            })
        );
    }

    private calcUserAge(dateOfBirth: number): number {
        return dayjs(Date.now()).diff(dayjs.unix(dateOfBirth), "year");
    }
}
