// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { FirebaseService } from "./../../../app/firebase/firebase-integration.service";

@Component({
  selector: 'app-upload-task-bulk-import',
  templateUrl: './upload-task-bulk-import.component.html',
  styleUrls: ['./upload-task-bulk-import.component.scss'],
})
export class UploadTaskBulkImportComponent implements OnInit {

  // data passed from firebase update user to uploader component, then to upload task here
  @Input() file: File;
  @Input() id: any;
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    //    private firebaseService: FirebaseService
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    console.log('id is ', this.id);

    this.startUpload();
  }

  startUpload() {
    // The storage path
    console.log(this.id);
    const path = `Invoice/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // var metadata = {
    //   contentType: 'text/csv',
    // };

    // The main task
    // this.task = this.storage.upload(path, this.file, metadata);
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
          .doc("Contacts")
          // .collection("Contacts")
          //     .update({ downloadURL: this.downloadURL, path });
          .set({ downloadURL: this.downloadURL, path });
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