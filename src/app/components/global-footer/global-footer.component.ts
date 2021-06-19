import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-global-footer",
  templateUrl: "./global-footer.component.html",
  styleUrls: ["./global-footer.component.scss"]
})
export class GlobalFooterComponent implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() { }
}
