import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ContactUsPage } from "./contact-us.page";
import { ComponentsModule } from "../../../app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: ContactUsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
