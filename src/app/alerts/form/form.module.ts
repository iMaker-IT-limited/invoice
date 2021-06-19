import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { FormPage } from "./form.page";
import { ComponentsModule } from "../../components/components.module";
import { AuthService } from "../../../app/services/auth.service";
import { FirebaseService } from "../../../app/firebase/firebase-integration.service";

const routes: Routes = [
  {
    path: "",
    component: FormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [FormPage],
  providers: [AuthService, FirebaseService]
})
export class FormPageModule {}
