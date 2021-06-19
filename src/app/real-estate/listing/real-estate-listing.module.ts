import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { IonicModule } from "@ionic/angular";

import { ComponentsModule } from "../../components/components.module";

import { RealEstateListingPage } from "./real-estate-listing.page";
import { RealEstateListingResolver } from "./real-estate-listing.resolver";
import { RealEstateService } from "../real-estate.service";
import { FirebaseService } from "../../../app/firebase/firebase-integration.service";
import { AuthService } from "../../../app/services/auth.service";
import { BypasssanitizeDirective } from "../../../app/directives/bypasssanitize.directive";

const routes: Routes = [
  {
    path: "",
    component: RealEstateListingPage,
    resolve: {
      data: RealEstateListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [RealEstateListingPage, BypasssanitizeDirective],
  providers: [
    RealEstateListingResolver,
    RealEstateService,
    FirebaseService,
    AuthService
  ]
})
export class RealEstateListingPageModule {}
