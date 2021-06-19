import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// 1. Import the libs you need
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { ComponentsModule } from "../components/components.module";
import { environment } from "../../environments/environment";

import { FirebaseCreateUserModal } from "./user/create/firebase-create-user.modal";
import { FirebaseUpdateUserModal } from "./user/update/firebase-update-user.modal";
import { SelectUserImageModal } from "./user/select-image/select-user-image.modal";
import { FormAlertPageModule } from "../alerts/form-alert/form-alert.module";
import { NotificationsPageModule } from '../notifications/notifications.module';

// form - results;
// C:\Users\hf\Desktop\ionic4-full-starter-app-pro-version-1.2.1\src\app\real-estate\listing\real-estate-listing.module.ts
const firebaseRoutes: Routes = [
  // { path: 'company-profile', loadChildren: './firebase/company_profile/company-profile/company-profile.module#CompanyProfilePageModule' },
  {
    path: "company-profile",
    loadChildren: () =>
      import("./../firebase/company_profile/company-profile/company-profile.module").then(
        m => m.CompanyProfilePageModule
      )
  },
  { path: 'update', loadChildren: './firebase/company_profile/update/update.module#UpdatePageModule' },

  //  { path: 'create', loadChildren: './firebase/creditnotes/create/create.module#CreatePageModule' },
  {
    path: "creditnotes#create",
    loadChildren: () =>
      import("./../firebase/creditnotes/create/create.module").then(
        m => m.CreatePageModule
      )
  },
  // { path: 'details', loadChildren: './firebase/creditnotes/details/details.module#DetailsPageModule' },
  {
    path: "creditnotes#details",
    loadChildren: () =>
      import("./../firebase/creditnotes/details/details.module").then(
        m => m.DetailsPageModule
      )
  },
  // { path: 'creditnotes', loadChildren: './firebase/creditnotes/creditnotes/creditnotes.module#CreditnotesPageModule' },
  {
    path: "creditnotes",
    loadChildren: () =>
      import("./../firebase/creditnotes/creditnotes/creditnotes.module").then(
        m => m.CreditnotesPageModule
      )
  },
  // { path: 'update', loadChildren: './firebase/creditnotes/update/update.module#UpdatePageModule' },
  {
    path: "creditnotes#update",
    loadChildren: () =>
      import("./../firebase/creditnotes/update/update.module").then(
        m => m.UpdatePageModule
      )
  },
  // { path: 'create', loadChildren: './firebase/paymentsrec/create/create.module#CreatePageModule' },
  {
    path: "paymentsrec#create",
    loadChildren: () =>
      import("./../firebase/paymentsrec/create/create.module").then(
        m => m.CreatePageModule
      )
  },
  // { path: 'details', loadChildren: './firebase/paymentsrec/details/details.module#DetailsPageModule' },
  {
    path: "paymentsrec#details",
    loadChildren: () =>
      import("./../firebase/paymentsrec/details/details.module").then(
        m => m.DetailsPageModule
      )
  },
  // { path: 'paymentsrec', loadChildren: './firebase/paymentsrec/paymentsrec/paymentsrec.module#PaymentsrecPageModule' },
  {
    path: "paymentsrec",
    loadChildren: () =>
      import("./../firebase/paymentsrec/paymentsrec/paymentsrec.module").then(
        m => m.PaymentsrecPageModule
      )
  },

  // { path: 'update', loadChildren: './firebase/paymentsrec/update/update.module#UpdatePageModule' },
  {
    path: "paymentsrec#update",
    loadChildren: () =>
      import("./../firebase/paymentsrec/update/update.module").then(
        m => m.UpdatePageModule
      )
  },


  // { path: 'details', loadChildren: './firebase/contacts/details/details.module#DetailsPageModule' },
  {
    path: "contacts#details",
    loadChildren: () =>
      import("./../firebase/contacts/details/details.module").then(
        m => m.DetailsPageModule
      )
  },


  // { path: 'details', loadChildren: './firebase/inventory/details/details.module#DetailsPageModule' },
  {
    path: "inventory#details",
    loadChildren: () =>
      import("./../firebase/inventory/details/details.module").then(
        m => m.DetailsPageModule
      )
  },

  //  { path: 'quotes#details', loadChildren: './firebase/quotes/details/details.module#DetailsPageModule' },
  {
    path: "quotes#details",
    loadChildren: () =>
      import("./../firebase/quotes/details/details.module").then(
        m => m.DetailsPageModule
      )
  },

  //  { path: 'invoices#details', loadChildren: './firebase/invoices/details/details.module#DetailsPageModule' },
  {
    path: "invoices#details",
    loadChildren: () =>
      import("./../firebase/invoices/details/details.module").then(
        m => m.DetailsPageModule
      )
  },
  // copy user-profile
  {
    path: "contacts",
    loadChildren: () =>
      import("./../firebase/contacts/contacts/contacts.module").then(
        m => m.ContactsPageModule
      )
  },
  //  { path: 'contacts', loadChildren: './../firebase/contacts/contacts/contacts.module#ContactsPageModule' },
  {
    path: "quotes",
    loadChildren: () =>
      import("./../firebase/quotes/quotes/quotes.module").then(
        m => m.QuotesPageModule
      )
  },
  // { path: 'quotes', loadChildren: './../firebase/quotes/quotes/quotes.module#QuotesPageModule' },
  {
    path: "invoices",
    loadChildren: () =>
      import("./../firebase/invoices/invoices/invoices.module").then(
        m => m.InvoicesPageModule
      )
  },
  // { path: 'expenses', loadChildren: './firebase/expenses/expenses/expenses.module#ExpensesPageModule' },
  {
    path: "expenses",
    loadChildren: () =>
      import("./../firebase/expenses/expenses/expenses.module").then(
        m => m.ExpensesPageModule
      )
  },
  // { path: 'create', loadChildren: './firebase/expenses/create/create.module#CreatePageModule' },
  {
    path: "create#expenses",
    loadChildren: () =>
      import("./../firebase/expenses/create/create.module").then(
        m => m.CreatePageModule
      )
  },

  // { path: 'create', loadChildren: './firebase/expenses/create/create.module#CreatePageModule' },
  {
    path: "update#expenses",
    loadChildren: () =>
      import("./../firebase/expenses/update/update.module").then(
        m => m.UpdatePageModule
      )
  },
  // { path: 'update', loadChildren: './firebase/expenses/update/update.module#UpdatePageModule' },
  {
    path: "details#expenses",
    loadChildren: () =>
      import("./../firebase/expenses/details/details.module").then(
        m => m.DetailsPageModule
      )
  },
  // { path: 'details', loadChildren: './firebase/expenses/details/details.module#DetailsPageModule' },

  // { path: 'invoices', loadChildren: './../firebase/invoices/invoices/invoices.module#InvoicesPageModule' },
  {
    path: "inventory/items",
    loadChildren: () =>
      import("./../firebase/inventory/items/items.module").then(
        m => m.ItemsPageModule
      )
  },

  //  { path: 'inventory/items', loadChildren: './../firebase/inventory/items/items.module#ItemsPageModule' },
  {
    path: "update#contacts",
    loadChildren: () =>
      import("./../firebase/contacts/update/update.module").then(
        m => m.UpdatePageModule
      )
  },
  // { path: 'update#contacts', loadChildren: './../firebase/contacts/update/update.module#UpdatePageModule' },
  {
    path: "create#contacts",
    loadChildren: () =>
      import("./../firebase/contacts/create/create.module").then(
        m => m.CreatePageModule
      )
  },
  { path: 'create#contacts', loadChildren: './../firebase/contacts/create/create.module#CreatePageModule' },
  {
    path: "create#inventory",
    loadChildren: () =>
      import("./../firebase/inventory/create/create.module").then(
        m => m.CreatePageModule
      )
  },
  // { path: 'create#inventory', loadChildren: './../firebase/inventory/create/create.module#CreatePageModule' },
  {
    path: "update#inventory",
    loadChildren: () =>
      import("./../firebase/inventory/update/update.module").then(
        m => m.UpdatePageModule
      )
  },
  // { path: 'update#inventory', loadChildren: './../firebase/inventory/update/update.module#UpdatePageModule' },
  {
    path: "create#invoices",
    loadChildren: () =>
      import("./../firebase/invoices/create/create.module").then(
        m => m.CreatePageModule
      )
  },
  // { path: 'create#invoices', loadChildren: './../firebase/invoices/create/create.module#CreatePageModule' },
  {
    path: "update#invoices",
    loadChildren: () =>
      import("./../firebase/invoices/update/update.module").then(
        m => m.UpdatePageModule
      )
  },
  // { path: 'update#invoices', loadChildren: './../firebase/invoices/update/update.module#UpdatePageModule' },
  {
    path: "create#quotes",
    loadChildren: () =>
      import("./../firebase/quotes/create/create.module").then(
        m => m.CreatePageModule
      )
  },
  // { path: 'create#quotes', loadChildren: './../firebase/quotes/create/create.module#CreatePageModule' },
  {
    path: "update#quotes",
    loadChildren: () =>
      import("./../firebase/quotes/update/update.module").then(
        m => m.UpdatePageModule
      )
  },
  // { path: 'update#quotes', loadChildren: './../firebase/quotes/update/update.module#UpdatePageModule' },
  {
    path: "user-profile",
    loadChildren: () =>
      import("./../user/profile/user-profile.module").then(
        m => m.UserProfilePageModule
      )
  }, {
    path: "categories",
    loadChildren: () =>
      import("./../categories/categories.module").then(
        m => m.CategoriesPageModule
      )
  },
  {
    path: "real-estate",
    loadChildren: () =>
      import("./../real-estate/listing/real-estate-listing.module").then(
        m => m.RealEstateListingPageModule
      )
  },
  {
    path: "real-estate/details",
    loadChildren: () =>
      import("./../real-estate/details/real-estate-details.module").then(
        m => m.RealEstateDetailsPageModule
      )
  },
  {
    path: "listing",
    loadChildren: () =>
      import("./listing/firebase-listing.module").then(
        m => m.FirebaseListingPageModule
      )
  },
  {
    path: "details/:id",
    loadChildren: () =>
      import("./user/details/firebase-user-details.module").then(
        m => m.FirebaseUserDetailsPageModule
      )
  },
  {
    path: "form",
    loadChildren: () =>
      import("./../alerts/form/form.module").then(m => m.FormPageModule)
  },
  {
    path: "form-results",
    loadChildren: () =>
      import("./../alerts/form-results/form-results.module").then(
        m => m.FormResultsPageModule
      )
  },
  {
    path: "getting-started",
    loadChildren: () =>
      import("./../getting-started/getting-started.module").then(
        m => m.GettingStartedPageModule
      )
  },
  {
    path: "user-friends",
    loadChildren: () =>
      import("./../user/friends/user-friends.module").then(
        m => m.UserFriendsPageModule
      )
  },
  {
    path: "notifications",
    loadChildren: () =>
      import("./../notifications/notifications.module").then(
        m => m.NotificationsPageModule
      )
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormAlertPageModule,
    NotificationsPageModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild(firebaseRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    FirebaseCreateUserModal,
    FirebaseUpdateUserModal,
    SelectUserImageModal
  ],
  declarations: [
    FirebaseCreateUserModal,
    FirebaseUpdateUserModal,
    SelectUserImageModal
  ]
})
export class FirebaseIntegrationModule { }
