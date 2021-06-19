import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "../../../app/components/components.module";

import { JoinUsSubmenu2Page } from "./join-us-submenu2.page";

const routes: Routes = [
  {
    path: "",
    component: JoinUsSubmenu2Page
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
  declarations: [JoinUsSubmenu2Page]
})
export class JoinUsSubmenu2PageModule {}
