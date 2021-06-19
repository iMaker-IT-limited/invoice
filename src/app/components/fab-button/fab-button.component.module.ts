import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FabButtonComponent } from "./fab-button.component";
import { FormPageModule } from "../../../app/alerts/form/form.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormPageModule,
    RouterModule.forChild([{ path: "", component: FabButtonComponent }])
  ],
  declarations: [FabButtonComponent]
  // providers: [FirebaseService]
})
export class FabButtonComponentModule {}
