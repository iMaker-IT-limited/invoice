import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormPageModule } from "../../../app/alerts/form/form.module";
import { FormsModule } from "@angular/forms";
import { GlobalFooterComponent } from "./global-footer.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormPageModule,
    RouterModule.forChild([{ path: "", component: GlobalFooterComponent }])
  ],
  declarations: [GlobalFooterComponent]
  // providers: [FirebaseService]
})
export class GlobalFooterComponentModule {}
