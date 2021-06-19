import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray } from "@angular/forms";

import { FirebaseService } from "../../firebase-integration.service";
import { ItemModel } from "./../../invoice.model";
import { AuthService } from "./../../../../app/services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  createItemForm: FormGroup;
  itemData: ItemModel = new ItemModel();
  uid: string;
  email: string;
  itemDetail: ItemModel = new ItemModel();

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private navCtrl: NavController,
    public firebaseService: FirebaseService
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      const value = JSON.parse(res.data);
      console.log(value);
      this.itemDetail = value;
    })

    this.createItemForm = new FormGroup({
      "Item ID": new FormControl(this.itemDetail["Item ID"]),
      "Item Name": new FormControl(this.itemDetail["Item Name"]),
      "Description": new FormControl(this.itemDetail.Description),
      "Rate": new FormControl(this.itemDetail.Rate),
      "Tax1 Name": new FormControl(this.itemDetail["Tax1 Name"]),
      "Tax1 Percentage": new FormControl(this.itemDetail["Tax1 Percentage"]),
      "Tax1 Type": new FormControl(this.itemDetail["Tax1 Type"]),
      "Product Type": new FormControl(this.itemDetail["Product Type"]),
      "Source": new FormControl(this.itemDetail.Source),
      "Reference ID": new FormControl(this.itemDetail["Reference ID"]),
      "Last Sync Time": new FormControl(this.itemDetail["Last Sync Time"]),
      "Status": new FormControl(this.itemDetail.Status),
      "Usage unit": new FormControl(this.itemDetail["Usage unit"]),
    })

  }

  createItem() {
    this.itemData["Item ID"] = this.createItemForm.value["Item ID"];
    this.itemData["Item Name"] = this.createItemForm.value["Item Name"];
    this.itemData.Description = this.createItemForm.value.Description;
    this.itemData.Rate = this.createItemForm.value.Rate;
    this.itemData["Tax1 Name"] = this.createItemForm.value["Tax1 Name"];
    this.itemData["Tax1 Percentage"] = this.createItemForm.value["Tax1 Percentage"];
    this.itemData["Tax1 Type"] = this.createItemForm.value["Tax1 Type"];
    this.itemData["Product Type"] = this.createItemForm.value["Product Type"];
    this.itemData["Source"] = this.createItemForm.value["Source"];
    this.itemData["Reference ID"] = this.createItemForm.value["Reference ID"];
    this.itemData["Last Sync Time"] = this.createItemForm.value["Last Sync Time"];
    this.itemData.Status = this.createItemForm.value.Status;
    this.itemData["Usage unit"] = this.createItemForm.value["Usage unit"];


    console.log(this.uid, this.email, this.createItemForm.value);
    this.firebaseService.updateItems(this.itemDetail['id'], this.uid, this.email, this.createItemForm.value).then(() => {
      this.dismissModal();
    });
  }

  dismissModal() {
    this.navCtrl.navigateRoot('/firebase/inventory/items');
  }
}
