import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ComponentsModule } from "./components/components.module";

import { ServiceWorkerModule } from "@angular/service-worker";
import { IonicStorageModule } from "@ionic/storage";
import { environment } from "../environments/environment";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormsValidationsPageModule } from "./forms/validations/forms-validations.module";
import { FormPageModule } from "./alerts/form/form.module";

import * as firebase from "firebase";
import { PopOverComponent } from "./pop-over/pop-over.component";
import { AuthService } from "./services/auth.service";
import { UserFriendsPageModule } from './user/friends/user-friends.module';
// import { FormAlertPageModule } from "./alerts/form-alert/form-alert.module";
// import { BypasssanitizeDirective } from "./directives/bypasssanitize.directive";
// import { DropzoneDirective } from './directives/dropzone.directive';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent, PopOverComponent],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule,
    FormPageModule,
    UserFriendsPageModule,
    // FormsValidationsPageModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [PopOverComponent],
  providers: [
    AuthService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
