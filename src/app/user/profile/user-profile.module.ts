import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserProfilePage } from "./user-profile.page";
import { UserService } from "../user.service";
import { UserProfileResolver } from "./user-profile.resolver";
import { ComponentsModule } from "../../components/components.module";
import { LanguageService } from "../../language/language.service";
import { TranslateModule } from "@ngx-translate/core";
import { AuthService } from "../../../app/services/auth.service";
import { FirebaseService } from "../../../app/firebase/firebase-integration.service";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

const routes: Routes = [
  {
    path: "",
    component: UserProfilePage,
    resolve: {
      data: UserProfileResolver
    }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ],
  declarations: [UserProfilePage],
  providers: [
    UserProfileResolver,
    UserService,
    FirebaseService,
    AuthService,
    LanguageService
  ]
})
export class UserProfilePageModule { }
