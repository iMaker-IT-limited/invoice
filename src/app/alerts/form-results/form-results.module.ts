import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { FormResultsPage } from "./form-results.page";
import { ComponentsModule } from "../../../app/components/components.module";
import { AuthService } from "../../../app/services/auth.service";
import { FirebaseService } from "../../../app/firebase/firebase-integration.service";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes: Routes = [
  {
    path: "",
    component: FormResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ],
  declarations: [FormResultsPage],
  providers: [AuthService, FirebaseService]
})
export class FormResultsPageModule { }
