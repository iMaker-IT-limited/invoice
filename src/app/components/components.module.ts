import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ShellModule } from "../shell/shell.module";

import { CheckboxWrapperComponent } from "./checkbox-wrapper/checkbox-wrapper.component";
import { ShowHidePasswordComponent } from "./show-hide-password/show-hide-password.component";
import { CountdownTimerComponent } from "./countdown-timer/countdown-timer.component";
import { CounterInputComponent } from "./counter-input/counter-input.component";
import { RatingInputComponent } from "./rating-input/rating-input.component";
import { GoogleMapComponent } from "./google-map/google-map.component";
import { HeaderComponent } from "./header/header.component";
import { GlobalBannerComponent } from "./global-banner/global-banner.component";
import { FabButtonComponent } from "./fab-button/fab-button.component";
import { GlobalFooterComponent } from "./global-footer/global-footer.component";
import { SearchFormComponent } from "./search-form/search-form.component";
import { UploaderComponent } from "./uploader/uploader.component";
import { UploadTaskComponent } from "./upload-task/upload-task.component";
import { DropzoneDirective } from "../directives/dropzone.directive";
import { UploadTaskSqComponent } from "./upload-task-sq/upload-task-sq.component";
import { UploaderSqComponent } from "./uploader-sq/uploader-sq.component";
import { UploadTaskBulkImportComponent } from './upload-task-bulk-import/upload-task-bulk-import.component';
import { UploaderBulkImportComponent } from './uploader-bulk-import/uploader-bulk-import.component';
import { NodataComponent } from "./nodata/nodata.component";

@NgModule({
  imports: [CommonModule, FormsModule, ShellModule, IonicModule.forRoot()],
  declarations: [
    CheckboxWrapperComponent,
    ShowHidePasswordComponent,
    CountdownTimerComponent,
    CounterInputComponent,
    RatingInputComponent,
    GoogleMapComponent,
    HeaderComponent,
    FabButtonComponent,
    GlobalBannerComponent,
    GlobalFooterComponent,
    SearchFormComponent,
    UploaderComponent,
    UploadTaskComponent,
    UploaderSqComponent,
    UploadTaskSqComponent,
    DropzoneDirective,
    UploaderBulkImportComponent,
    UploadTaskBulkImportComponent,
    NodataComponent
  ],
  exports: [
    ShellModule,
    CheckboxWrapperComponent,
    ShowHidePasswordComponent,
    CountdownTimerComponent,
    CounterInputComponent,
    RatingInputComponent,
    GoogleMapComponent,
    HeaderComponent,
    FabButtonComponent,
    GlobalBannerComponent,
    GlobalFooterComponent,
    SearchFormComponent,
    UploaderComponent,
    UploadTaskComponent,
    UploaderSqComponent,
    UploadTaskSqComponent,
    UploaderBulkImportComponent,
    UploadTaskBulkImportComponent,
    NodataComponent
  ]
})
export class ComponentsModule { }
