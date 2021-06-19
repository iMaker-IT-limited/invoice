import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { FormAlertPage } from "./form-alert.page";
import { ComponentsModule } from "../../../app/components/components.module";
import { AuthService } from "../../../app/services/auth.service";
import { FirebaseService } from "../../../app/firebase/firebase-integration.service";

const routes: Routes = [
  {
    path: "",
    component: FormAlertPage
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
  declarations: [FormAlertPage],
  providers: [AuthService, FirebaseService]
})
export class FormAlertPageModule {}
