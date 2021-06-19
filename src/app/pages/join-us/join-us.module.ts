import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { JoinUsPage } from "./join-us.page";
import { ComponentsModule } from "../../../app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: JoinUsPage
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
  declarations: [JoinUsPage]
})
export class JoinUsPageModule {}
