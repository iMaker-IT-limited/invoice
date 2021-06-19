import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { AboutUsSubmenu2Page } from "./about-us-submenu2.page";
import { ComponentsModule } from "../../../app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: AboutUsSubmenu2Page
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
  declarations: [AboutUsSubmenu2Page]
})
export class AboutUsSubmenu2PageModule {}
