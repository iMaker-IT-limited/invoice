import { IonicModule, NavParams } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ComponentsModule } from "../components/components.module";

import { CategoriesPage } from "./categories.page";
import { FormsValidationsPageModule } from "../forms/validations/forms-validations.module";
import { FirebaseService } from "../firebase/firebase-integration.service";
import { AuthService } from "../services/auth.service";

const categoriesRoutes: Routes = [
  {
    path: "",
    component: CategoriesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //  FormsValidationsPageModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule
  ],
  declarations: [CategoriesPage],
  providers: []
})
export class CategoriesPageModule { }
