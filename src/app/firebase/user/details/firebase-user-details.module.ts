import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { ComponentsModule } from "../../../components/components.module";

import { FirebaseUserDetailsPage } from "./firebase-user-details.page";
import { FirebaseService } from "../../firebase-integration.service";
import { FirebaseUserDetailsResolver } from "./firebase-user-details.resolver";
// import { AuthService } from '../../../app/services/auth.service';

const routes: Routes = [
  {
    path: "",
    component: FirebaseUserDetailsPage,
    resolve: {
      data: FirebaseUserDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [FirebaseUserDetailsPage],
  providers: [
    FirebaseService,
    //   AuthService,
    FirebaseUserDetailsResolver
  ]
})
export class FirebaseUserDetailsPageModule {}
