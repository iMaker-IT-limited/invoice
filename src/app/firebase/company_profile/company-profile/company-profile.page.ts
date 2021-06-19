import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController, NavController, ToastController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray, FormControlName } from "@angular/forms";
import * as dayjs from "dayjs";

import { FirebaseService } from "../../firebase-integration.service";

import { AuthService } from "./../../../../app/services/auth.service";
import { Subscriber } from "rxjs";
import { Observable } from "rxjs";
// import { SelectUserImageModal } from "../select-image/select-user-image.modal";

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.page.html',
  styleUrls: ['./company-profile.page.scss'],
})
export class CompanyProfilePage implements OnInit {
  createUserForm: FormGroup;
  createSupplierForm: FormGroup;

  FilterForm: FormGroup;
  createContactForm: FormGroup;
  uid: string;
  email: string;
  displayName: string;
  createCompanyProfileForm: FormGroup;
  createTermsandConditionsForm: FormGroup;
  createCustomerNotesForm: FormGroup;
  myimage: Observable<any>;
  base64Image: any;
  companyprofile: unknown;
  companyemail: any;
  company_name: any;
  companyaddress: any;
  website: any;
  logo_base64Image: any;
  customernotes: any;
  termsandconditions: any;
  createLogisticCompanyProfileForm: FormGroup;
  companylogisticprofile: unknown;
  shipper: any;
  consignee: any;
  port_of_loading: any;
  port_of_discharge: any;
  HBL: any;
  MBL: any;
  carriage_by: any;
  vessel: any;
  container: any;
  date_of_order: any;
  your_reference: any;
  terms_of_delivery: any;
  marks_no: any;
  pieces: any;
  packaging: any;
  description_of_goods: any;
  weight: any;
  cbm: any;

  constructor(
    private toastController: ToastController,
    private navCtrl: NavController,
    public firebaseService: FirebaseService,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.displayName = this.authService.displayName();
    this.uid = this.authService.uid();
    this.email = this.authService.email();

  }

  ngOnInit() {

    // company name
    // address
    // base currency
    // business phone/ work phone
    // mobile phone

    this.createCompanyProfileForm = new FormGroup({
      address: new FormControl(""),
      company_name: new FormControl(""),
      company_email: new FormControl(""),
      work_phone: new FormControl(""),
      website: new FormControl(""),
    })

    this.createLogisticCompanyProfileForm = new FormGroup({
      shipper: new FormControl(""),
      consignee: new FormControl(""),
      port_of_loading: new FormControl(""),
      port_of_discharge: new FormControl(""),
      HBL: new FormControl(""),
      MBL: new FormControl(""),
      carriage_by: new FormControl(""),
      vessel: new FormControl(""),
      container: new FormControl(""),
      date_of_order: new FormControl(""),
      your_reference: new FormControl(""),
      terms_of_delivery: new FormControl(""),
      marks_no: new FormControl(""),
      pieces: new FormControl(""),
      packaging: new FormControl(""),
      description_of_goods: new FormControl(""),
      weight: new FormControl(""),
      cbm: new FormControl(""),
    })

    this.createCustomerNotesForm = new FormGroup({
      customernotes: new FormControl("")
    })

    this.createTermsandConditionsForm = new FormGroup({
      termsandconditions: new FormControl("")
    })

    this.getCompanyProfile();
    this.getTermsandConditions();
    this.getCustomerNotes();
    this.getLogisticCompanyProfile();
    // this.createUserForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   lastname: new FormControl('', Validators.required),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   phone: new FormControl('', Validators.required),
    //   birthdate: new FormControl(Validators.required),
    //   skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
    //   spanish: new FormControl(),
    //   english: new FormControl(),
    //   french: new FormControl()
    // });

    // this.firebaseService.getSkills().subscribe(skills => {
    //   this.skills = skills;
    //   // create skill checkboxes
    //   this.skills.map(() => {
    //     (this.createUserForm.controls.skills as FormArray).push(new FormControl());
    //   });
    // });
  }

  // get skillsFormArray() { return <FormArray>this.createUserForm.get('skills'); }

  changeLangValue(value): string {
    switch (true) {
      case value <= 3:
        return "Novice";
      case value > 3 && value <= 6:
        return "Competent";
      case value > 6:
        return "Expert";
    }
  }

  submitFilterForm() {
    console.log(this.FilterForm.value);
  }

  onReset() {
    this.createSupplierForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      cate_1: new FormControl(""),
      cate_2: new FormControl(""),
      cate_3: new FormControl(""),
      cate_4: new FormControl(""),
      average_speed: new FormControl(0),
      reply_rate: new FormControl(0),
      editor_choice: new FormControl(),
      class_size: new FormControl({ lower: 10, upper: 42 }),
      target_user_age: new FormControl({ lower: 10, upper: 16 }),
      class_length: new FormControl({ lower: 10, upper: 42 }),
      // teaching_materials: new FormControl("rental"),
      company_intro: new FormControl(),
      tutor_qual: new FormControl(),
      competition_exp: new FormControl()
    });
  }

  dismissModal() {
    //  this.modalController.dismiss();
    this.navCtrl.navigateBack('/firebase/user-profile');
  }

  // CRUD
  async createCompanyProfile() {
    console.log(this.uid, this.email, this.createCompanyProfileForm.value);
    console.log(this.base64Image);

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            this.createCompanyProfileForm.value["logo_base64Image"] = this.base64Image;
            this.firebaseService.createCompanyProfile(this.uid, this.email, this.createCompanyProfileForm.value).then((res) => {
              this.getCompanyProfile();
            })
            // this.dismissModal();
            const toast = await this.toastController.create({
              message: 'Your settings have been saved.',
              mode: 'ios',
              position: 'top',
              color: 'theme',
              duration: 2500
            });
            toast.present();
          }


        }
      ]
    });

    await alert.present().then(() => {

    }).catch(err => {
      err.log(err);
    });



  }

  // CRUD
  async createLogisticCompanyProfile() {
    console.log(this.uid, this.email, this.createLogisticCompanyProfileForm.value);
    console.log(this.base64Image);

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            //            this.createCompanyProfileForm.value["logo_base64Image"] = this.base64Image;
            this.firebaseService.createLogisticCompanyProfile(this.uid, this.email, this.createLogisticCompanyProfileForm.value).then((res) => {
              this.getLogisticCompanyProfile();
            })
            // this.dismissModal();
            const toast = await this.toastController.create({
              message: 'Your settings have been saved.',
              mode: 'ios',
              position: 'top',
              color: 'theme',
              duration: 2500
            });
            toast.present();
          }


        }
      ]
    });

    await alert.present().then(() => {

    }).catch(err => {
      err.log(err);
    });



  }
  async createTermsandConditions() {
    console.log(this.uid, this.email, this.createTermsandConditionsForm.value);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            this.firebaseService.createTermsandConditions(this.uid, this.email, this.createTermsandConditionsForm.value).then((res) => {
              this.getTermsandConditions();
            })
            // this.dismissModal();
            const toast = await this.toastController.create({
              message: 'Your settings have been saved.',
              mode: 'ios',
              position: 'top',
              color: 'theme',
              duration: 2500
            });
            toast.present();
          }
        }
      ]
    });

    await alert.present().then(() => {

    }).catch(err => {
      err.log(err);
    });


  }

  async createCustomerNotes() {
    console.log(this.uid, this.email, this.createCustomerNotesForm.value);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: '<strong>This will be shown in the estimate and invoice</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: async () => {
            this.firebaseService.createCustomerNotes(this.uid, this.email, this.createCustomerNotesForm.value).then(res => {
              this.getCustomerNotes();
            })
            // this.dismissModal();
            const toast = await this.toastController.create({
              message: 'Your settings have been saved.',
              mode: 'ios',
              position: 'top',
              color: 'theme',
              duration: 2500
            });
            toast.present();
          }
        }
      ]
    });

    await alert.present().then(() => {

    }).catch(err => {
      err.log(err);
    });
  }

  onChange($event: Event) {
    const file = ($event.target as HTMLElement)['files'][0];

    console.log('file is: ', file);

    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    this.myimage.subscribe(res => {
      console.log(res);
      this.base64Image = res;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };

    filereader.onerror = (error) => {
      subscriber.error(error);
    }
  }
  // updateContact() {
  //   console.log(this.email, this.uid), this.createContactForm.value;
  //   this.firebaseService.updateContacts(this.uid, this.email, this.createContactForm.value).then(() => {
  //     //  this.dismissModal();
  //   });
  // }

  // deleteContact(contactId) {
  //   console.log(this.email, this.uid);
  //   this.firebaseService.deleteContacts(this.uid, this.email, contactId).then(() => {
  //     //  this.dismissModal();
  //   });
  // }

  getCompanyProfile() {


    console.log(this.email, this.uid);

    this.firebaseService.readCompanyProfile(this.uid).subscribe(res => {
      console.log(res['userData']);
      this.companyprofile = res['userData'];
      this.companyemail = res['userData']['company_email'];
      this.companyaddress = res['userData']['address'];
      this.company_name = res['userData']['company_name'];
      this.website = res['userData']['website'];
      this.logo_base64Image = res['userData']['logo_base64Image'];
      this.base64Image = this.logo_base64Image;
      console.log(this.base64Image);

    })

  }

  getLogisticCompanyProfile() {

    console.log(this.email, this.uid);
    this.firebaseService.readLogisticCompanyProfile(this.uid).subscribe(res => {

      console.log(res['userData']);
      this.companylogisticprofile = res['userData'];
      this.shipper = res['userData']['shipper'];
      this.consignee = res['userData']['consignee'];
      this.port_of_loading = res['userData']['port_of_loading'];
      this.port_of_discharge = res['userData']['port_of_discharge'];
      this.HBL = res['userData']['HBL'];
      this.MBL = res['userData']['MBL'];
      this.carriage_by = res['userData']['carriage_by'];
      this.vessel = res['userData']['vessel'];
      this.container = res['userData']['container'];
      this.date_of_order = res['userData']['date_of_order'];
      this.your_reference = res['userData']['your_reference'];
      this.terms_of_delivery = res['userData']['terms_of_delivery'];
      this.marks_no = res['userData']['marks_no'];
      this.pieces = res['userData']['pieces'];
      this.packaging = res['userData']['packaging'];
      this.description_of_goods = res['userData']['description_of_goods'];
      this.weight = res['userData']['weight'];
      this.cbm = res['userData']['cbm'];

    })

  }

  getCustomerNotes() {
    console.log(this.email, this.uid);

    this.firebaseService.readCustomerNote(this.uid).subscribe(res => {
      console.log(res['userData']);
      this.customernotes = res['userData']['customernotes'];
    })

  }

  getTermsandConditions() {
    console.log(this.email, this.uid);

    this.firebaseService.readTermsandConditions(this.uid).subscribe(res => {
      console.log(res['userData']);
      this.termsandconditions = res['userData']['termsandconditions'];
    })

  }
}