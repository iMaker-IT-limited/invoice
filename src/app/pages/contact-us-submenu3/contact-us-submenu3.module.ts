import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ContactUsSubmenu3Page } from "./contact-us-submenu3.page";
import { ComponentsModule } from "../../../app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: ContactUsSubmenu3Page
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
  declarations: [ContactUsSubmenu3Page]
})
export class ContactUsSubmenu3PageModule {}
