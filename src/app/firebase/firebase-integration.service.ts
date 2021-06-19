import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// import { DocumentReference } from "@google-cloud/firestore";
import { map } from "rxjs/operators";
import { EstimateModel, InvoiceModel, ItemModel } from "./invoice.model";

@Injectable()
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  // id / Contacts / id / email / contactData
  // SHOULD BE FINISHED ON MONDAY
  // Step 1 ==> create flow for contact database
  // Step 2 ==> CRUD contacts/ items/ estimates/ invoices/ payment received/ credit notes
  // Step 3 ==> create ngx datatable for contact (could be done in Step 1)



  createStatus(id: string, AdminId: string, email: string, itemData: ItemModel) {
    const update_time = new Date();
    const update_time_num = new Date().getTime();
    const str_update_time = update_time_num.toString();

    itemData['time'] = update_time;
    itemData['time_num'] = update_time_num;
    return this.afs
      .collection(AdminId)
      .doc("Invoices")
      .collection("Invoices")
      .doc(id)
      .collection("status")
      .doc(str_update_time)
      .set({ ...itemData });
  }

  readStatus(id: string, AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("Invoices")
      .collection("Invoices")
      .doc(id)
      .collection('status')
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      )

  }
  getCompanyLogo(id) {
    return (
      this.afs
        .collection(id)
        .doc('Company_logo')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  getReceivables(id) {
    return (
      this.afs
        .collection(id)
        .doc('Receivables')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  getProfit(id) {
    return (
      this.afs
        .collection(id)
        .doc('Profit')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  createCompanyProfile(AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc("CompanyProfile")
      .set({ ...itemData });
  }

  readCompanyProfile(AdminId: string) {
    // return this.afs
    //   .collection(AdminId)
    //   .doc("CompanyProfile")
    //   .collection("CompanyProfile")

    return (
      this.afs
        .collection(AdminId)
        .doc('CompanyProfile')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  createLogisticCompanyProfile(AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc("LogisticCompanyProfile")
      .set({ ...itemData });
  }

  readLogisticCompanyProfile(AdminId: string) {
    // return this.afs
    //   .collection(AdminId)
    //   .doc("CompanyProfile")
    //   .collection("CompanyProfile")

    return (
      this.afs
        .collection(AdminId)
        .doc('LogisticCompanyProfile')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  createTermsandConditions(AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc("TermsandConditions")
      .set({ ...itemData });
  }

  readTermsandConditions(AdminId: string) {
    // return this.afs
    //   .collection(AdminId)
    //   .doc("TermsandConditions")
    //   .collection<ItemModel>("TermsandConditions")

    return (
      this.afs
        .collection(AdminId)
        .doc('TermsandConditions')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  createCustomerNotes(AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc("CustomerNote")
      .set({ ...itemData });


  }

  readCustomerNote(AdminId: string) {
    // return this.afs
    //   .collection(AdminId)
    //   .doc("CustomerNote")
    //   .collection("CustomerNote")

    return (
      this.afs
        .collection(AdminId)
        .doc('CustomerNote')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  /*
  Create/Read/Update/Delete Contact
  */
  createContacts(AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc("Contacts")
      .collection<ItemModel>("Contacts")
      .add({ ...itemData });


  }

  readContacts(AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("Contacts")
      .collection<ItemModel>("Contacts")

  }

  readContactsinCSV(AdminId: string, email: string) {
    return (
      this.afs
        .collection(AdminId)
        .doc('Contacts')
        .snapshotChanges()
        .pipe(
          map(a => {
            const userData = a.payload.data();
            //   const id = a.payload.id;
            return { userData };
          })
        )
    )
  }

  updateContacts(id: string, AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc('Contacts')
      //  .collection<ItemModel>(itemData["Item ID"].toString())
      .collection<ItemModel>("Contacts")
      .doc(id)
      .update({ ...itemData });
  }

  deleteContacts(id: string, AdminId: string, email: string): Promise<void> {
    return this.afs
      .collection(AdminId)
      .doc("Contacts")
      .collection<ItemModel>("Contacts")
      .doc(id)
      .delete();
  }

  /*
Create/Read/Update/Delete Item 
*/

  createItems(AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc("Items")
      .collection<ItemModel>("Items")
      .add({ ...itemData });
  }

  readItems(AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("Items")
      .collection<ItemModel>("Items")

  }

  updateItems(id: string, AdminId: string, email: string, itemData: ItemModel) {
    return this.afs
      .collection(AdminId)
      .doc('Items')
      //  .collection<ItemModel>(itemData["Item ID"].toString())
      .collection<ItemModel>("Items")
      .doc(id)
      .update({ ...itemData });
  }

  deleteItems(id: string, AdminId: string, email: string): Promise<void> {
    return this.afs
      .collection(AdminId)
      .doc("Items")
      .collection<ItemModel>("Items")
      .doc(id)
      .delete();
  }

  /*
Create Estimates Modal/ Read/ Update/ Delete
*/

  createEstimates(AdminId: string, email: string, estimateData: EstimateModel) {
    return this.afs
      .collection(AdminId)
      .doc("Estimates")
      .collection<EstimateModel>("Estimates")
      .add({ ...estimateData });
  }

  readEstimates(AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("Estimates")
      .collection<EstimateModel>("Estimates")

  }

  updateEstimates(id: string, AdminId: string, email: string, estimateData: EstimateModel) {
    return this.afs
      .collection(AdminId)
      .doc('Estimates')
      //  .collection<ItemModel>(itemData["Item ID"].toString())
      .collection<EstimateModel>("Estimates")
      .doc(id)
      .update({ ...estimateData });
  }

  deleteEstimates(id: string, AdminId: string, email: string): Promise<void> {
    return this.afs
      .collection(AdminId)
      .doc("Estimates")
      .collection<EstimateModel>("Estimates")
      .doc(id)
      .delete();
  }

  /*
Create Invoices Modal/ Read/ Update/ Delete
*/

  createInvoices(AdminId: string, email: string, estimateData: InvoiceModel) {
    return this.afs
      .collection(AdminId)
      .doc("Invoices")
      .collection<InvoiceModel>("Invoices")
      .add({ ...estimateData });
  }

  readInvoices(AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("Invoices")
      .collection<InvoiceModel>("Invoices")

  }

  updateInvoices(id: string, AdminId: string, email: string, estimateData: InvoiceModel) {
    return this.afs
      .collection(AdminId)
      .doc('Invoices')
      //  .collection<ItemModel>(itemData["Item ID"].toString())
      .collection<InvoiceModel>("Invoices")
      .doc(id)
      .update({ ...estimateData });
  }

  deleteInvoices(id: string, AdminId: string, email: string): Promise<void> {
    return this.afs
      .collection(AdminId)
      .doc("Invoices")
      .collection<InvoiceModel>("Invoices")
      .doc(id)
      .delete();
  }

  //  onPaymentReceived(invoiceDetail)
  /*
Create Payment Modal/ Read/ Update/ Delete
*/

  createPaymentReceived(AdminId: string, email: string, estimateData: InvoiceModel) {
    return this.afs
      .collection(AdminId)
      .doc("PaymentReceived")
      .collection<InvoiceModel>("PaymentReceived")
      .add({ ...estimateData });
  }

  readPaymentReceived(AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("PaymentReceived")
      .collection<InvoiceModel>("PaymentReceived")

  }

  updatePaymentReceived(id: string, AdminId: string, email: string, estimateData: InvoiceModel) {
    return this.afs
      .collection(AdminId)
      .doc('PaymentReceived')
      //  .collection<ItemModel>(itemData["Item ID"].toString())
      .collection<InvoiceModel>("PaymentReceived")
      .doc(id)
      .update({ ...estimateData });
  }

  deletePaymentReceived(id: string, AdminId: string, email: string): Promise<void> {
    return this.afs
      .collection(AdminId)
      .doc("PaymentReceived")
      .collection<InvoiceModel>("PaymentReceived")
      .doc(id)
      .delete();
  }

  //  onPaymentReceived(invoiceDetail)
  /*
Create Payment Modal/ Read/ Update/ Delete
*/

  createExpense(AdminId: string, email: string, estimateData: InvoiceModel) {
    return this.afs
      .collection(AdminId)
      .doc("Expense")
      .collection("Expense")
      .add({ ...estimateData });
  }

  readExpense(AdminId: string, email: string) {
    return this.afs
      .collection(AdminId)
      .doc("Expense")
      .collection("Expense")

  }

  updateExpense(id: string, AdminId: string, email: string, estimateData: InvoiceModel) {
    return this.afs
      .collection(AdminId)
      .doc('Expense')
      //  .collection<ItemModel>(itemData["Item ID"].toString())
      .collection("Expense")
      .doc(id)
      .update({ ...estimateData });
  }

  deleteExpense(id: string, AdminId: string, email: string): Promise<void> {
    return this.afs
      .collection(AdminId)
      .doc("Expense")
      .collection("Expense")
      .doc(id)
      .delete();
  }


}
