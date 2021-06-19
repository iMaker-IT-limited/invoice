import { Component, OnInit, Input } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-uploader-sq",
  templateUrl: "./uploader-sq.component.html",
  styleUrls: ["./uploader-sq.component.scss"]
})
export class UploaderSqComponent implements OnInit {
  @Input() enquirydetail: any;
  @Input() supplieruid: string;

  isHovering: boolean;

  files: File[] = [];
  atend: Date;
  getNow: number;
  hide: boolean;
  sendeetimestamp: any;
  NOW: number;

  constructor(private db: AngularFirestore) { }
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  ngOnInit() {
    console.log(this.enquirydetail, this.supplieruid);
    this.NOW = new Date().getTime();
  }

  number(value: number, numDay: number) {
    //   console.log(value, numDay + 1, Number(numDay) + 1);
    this.sendeetimestamp = this.enquirydetail.timestamp;

    const getcountday = Number(numDay) + 1;
    const limit = 1000 * 60 * 60 * 24 * getcountday + Number(value);
    //    const atsent = new Date(Number(value));
    const atend = new Date(limit);

    const w = atend.toString().substr(4, 11);
    const countdownDate = new Date(w.toString()).getTime();
    this.atend = atend;

    const getNow = new Date().toString().substr(4, 11);

    const AT_END = atend.getTime();
    const NOW = new Date().getTime();
    // if (w === getNow) {
    if (AT_END < NOW) {
      this.hide = true;
    } else {
      this.hide = false;
    }
    // *important
    // console.log(w, getNow);
    return countdownDate;
  }

  // sendtimelimitisend() {
  //   return this.db
  //     .collection("QuotationEnquiry")
  //     .doc(this.sendeetimestamp)
  //     .update({ timelimit_isEnd: true });
  // }
}
