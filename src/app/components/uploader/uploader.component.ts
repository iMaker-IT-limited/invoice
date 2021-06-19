import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"]
})
export class UploaderComponent implements OnInit {
  @Input() id: any;

  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  ngOnInit() {
    console.log(this.id);
    
  }
}
// import { Component } from "@angular/core";

// @Component({
//   selector: 'uploader',
//   templateUrl: "./uploader.component.html",
//   styleUrls: ["./uploader.component.scss"]
// })
// export class UploaderComponent {
//   isHovering: boolean;

//   files: File[] = [];

//   toggleHover(event: boolean) {
//     this.isHovering = event;
//   }

//   onDrop(files: FileList) {
//     for (let i = 0; i < files.length; i++) {
//       this.files.push(files.item(i));
//     }
//   }
// }
