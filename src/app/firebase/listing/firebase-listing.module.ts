import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ComponentsModule } from "../../components/components.module";

import { FirebaseListingPage } from "./firebase-listing.page";
import { FirebaseService } from "../firebase-integration.service";
import { FirebaseListingResolver } from "./firebase-listing.resolver";
import { AuthService } from "../../../app/services/auth.service";

const routes: Routes = [
  {
    path: "",
    component: FirebaseListingPage,
    resolve: {
      data: FirebaseListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseListingPage],
  providers: [AuthService, FirebaseService, FirebaseListingResolver]
})
export class FirebaseListingPageModule {}
