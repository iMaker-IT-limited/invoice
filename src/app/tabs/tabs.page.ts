import { Component } from "@angular/core";

import { MenuController } from "@ionic/angular";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["./styles/tabs.page.scss"]
})
export class TabsPage {
  constructor(public menu: MenuController, private platform: Platform) {}

  ionViewWillEnter() {
    console.log(this.platform.is("desktop"));

    // this.menu.close();
    this.menu.enable(true);

    if (this.platform.is("desktop")) {
      document.getElementById("tabs").style.display = "none";
    } else {
      document.getElementById("tabs").style.display = "block";
    }
  }
}
