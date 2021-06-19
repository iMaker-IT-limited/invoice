import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'app-uploader-bulk-import',
  templateUrl: './uploader-bulk-import.component.html',
  styleUrls: ['./uploader-bulk-import.component.scss'],
})
export class UploaderBulkImportComponent implements OnInit {
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