// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-upload-task-sq",
  templateUrl: "./upload-task-sq.component.html",
  styleUrls: ["./upload-task-sq.component.scss"]
})
export class UploadTaskSqComponent implements OnInit {
  // data passed from firebase update user to uploader component, then to upload task here
  @Input() file: File;
  @Input() id: any;
  @Input() supplieruid: string;
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private toastCtrl: ToastController,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    console.log(this.id, this.supplieruid);
    const sendee = this.id;
    const sendeeId = sendee.id;
    const supplieruid = this.supplieruid;
    const potential_supplier = sendee.potential_supplier;
    const path = `SQ/${Date.now()}_${this.file.name}`;

    const timestamp = new Date().getTime();

    // calculate the time difference between sending quotation
    // enquiry by teacher and sending sale quotation by potential supplier
    // by min (ie / 1000 / 60) by hour (1000 / 60 / 60) by day (1000 / 60 / 60 / 24)
    const speed = (timestamp - sendee.timestamp) / 1000 / 60 / 60 / 24;

    //
    //  const speed_userId = speed.toString().concat(potential_supplier.toString());
    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        // this.db
        //   .collection("SalesQuotation")
        //   .add({ timestamp, downloadURL: this.downloadURL, path });
        this.db.collection("SalesQuotation").add({
          supplier_uid: supplieruid,
          speed,
          sendeeId,
          potential_supplier,
          timestamp,
          sendee,
          sendee_id: sendee.id,
          sendee_cate_1: sendee.cate_1,
          sendee_class_length_lower: sendee.class_length_lower,
          sendee_class_length_upper: sendee.class_length_upper,
          sendee_class_size_lower: sendee.class_size_lower,
          sendee_class_size_upper: sendee.class_size_upper,
          sendee_target_user_age_lower: sendee.target_user_age_lower,
          sendee_target_user_age_upper: sendee.target_user_age_upper,
          sendee_potential_supplier: sendee.potential_supplier,
          sendee_teaching_materials: sendee.teaching_materials,
          sendee_timestamp: sendee.timestamp,
          downloadURL: this.downloadURL,
          path
        });

        const sendeetimestamp = sendee.timestamp.toString();
        this.db
          .collection("QuotationEnquiry")
          .doc(sendeetimestamp)
          .update({ sq_sent: true })
          .then(() => {
            this.presentToastWithOptions();
          });
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      // header: 'Toast header',
      message: "報價單提交成功!",
      position: "bottom",
      animated: true,
      mode: "ios",
      duration: 3000,
      cssClass: "profile-toast",
      translucent: false
      // buttons: [
      //   {
      //     side: "end",
      //     // icon: "star",
      //     text: "我明白",
      //     handler: () => {
      //       console.log("Favorite clicked");
      //       // this.navCtrl.navigateForward("firebase/user-profile");
      //     }
      //   }
      //   // {
      //   //   text: "我明白",
      //   //   role: "cancel",
      //   //   handler: () => {
      //   //     console.log("Cancel clicked");
      //   //     this.navCtrl.navigateForward("firebase/user-profile");
      //   //   }
      //   // }
      // ]
    });
    toast.present();
  }
}
