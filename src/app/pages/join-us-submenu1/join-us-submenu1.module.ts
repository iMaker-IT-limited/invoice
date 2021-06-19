import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { JoinUsSubmenu1Page } from "./join-us-submenu1.page";
import { ComponentsModule } from "../../../app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: JoinUsSubmenu1Page
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
  declarations: [JoinUsSubmenu1Page]
})
export class JoinUsSubmenu1PageModule {}
