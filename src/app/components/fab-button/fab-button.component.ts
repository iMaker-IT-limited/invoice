import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { myEnterAnimation } from "../../../app/animations/slideIn/enter-slideIn";
import { myLeaveAnimation } from "../../../app/animations/slideIn/leave-slideIn";
import { FormPage } from "../../../app/alerts/form/form.page";

@Component({
  selector: "app-fab-button",
  templateUrl: "./fab-button.component.html",
  styleUrls: ["./fab-button.component.scss"]
})
export class FabButtonComponent implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async onFilterForm() {
    this.navCtrl.navigateForward("/firebase/form");
    // const modal = await this.modalCtrl.create({
    //   cssClass: "my-custom-modal-css",
    //   component: FormPage,
    //   enterAnimation: myEnterAnimation,
    //   leaveAnimation: myLeaveAnimation
    //   // componentProps: {
    //   //   selectDate: this.selectDate,
    //   //   bookingforBar: this.bookingforBar
    //   // }
    // });
    // return await modal.present();
  }
}
