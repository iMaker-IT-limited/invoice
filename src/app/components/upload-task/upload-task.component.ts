// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

@Component({
  selector: "app-upload-task",
  templateUrl: "./upload-task.component.html",
  styleUrls: ["./upload-task.component.scss"]
})
export class UploadTaskComponent implements OnInit {
  // data passed from firebase update user to uploader component, then to upload task here
  @Input() file: File;
  @Input() id: any;
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    console.log(this.id);
    const path = `company_logo/${Date.now()}_${this.file.name}`;

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
        this.db
          .collection(this.id)
          .doc('Company_logo')
          .set({ downloadURL: this.downloadURL, path });

        //          .update({ downloadURL: this.downloadURL, path });
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === "running" &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}

// import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
// import {
//   AngularFireStorage,
//   AngularFireUploadTask
// } from "@angular/fire/storage";
// import { AngularFirestore } from "@angular/fire/firestore";
// import { Observable } from "rxjs";
// import { finalize, tap } from "rxjs/operators";

// @Component({
//   selector: 'upload-task',
//   templateUrl: "./upload-task.component.html",
//   styleUrls: ["./upload-task.component.scss"]
// })
// export class UploadTaskComponent implements OnInit {
//   @Input() file: File;

//   task: AngularFireUploadTask;

//   percentage: Observable<number>;
//   snapshot: Observable<any>;
//   downloadURL: string;

//   constructor(
//     private storage: AngularFireStorage,
//     private db: AngularFirestore
//   ) {}

//   ngOnInit() {
//     this.startUpload();
//   }

//   startUpload() {
//     // The storage path
//     const path = `test/${Date.now()}_${this.file.name}`;

//     // Reference to storage bucket
//     const ref = this.storage.ref(path);

//     // The main task
//     this.task = this.storage.upload(path, this.file);

//     // Progress monitoring
//     this.percentage = this.task.percentageChanges();

//     this.snapshot = this.task.snapshotChanges().pipe(
//       tap(console.log),
//       // The file's download URL
//       finalize(async () => {
//         this.downloadURL = await ref.getDownloadURL().toPromise();

//         this.db
//           .collection("files")
//           .add({ downloadURL: this.downloadURL, path });
//       })
//     );
//   }

//   isActive(snapshot) {
//     return (
//       snapshot.state === "running" &&
//       snapshot.bytesTransferred < snapshot.totalBytes
//     );
//   }
// }
