import { Directive, HostBinding, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Directive({
  selector: "[appBypasssanitize]"
})
export class BypasssanitizeDirective {
  @Input() appBypasssanitize: string;

  constructor(private sanitizer: DomSanitizer) {}

  @HostBinding("innerHTML")
  get innerHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustUrl(this.appBypasssanitize);
  }
  // getSantizeUrl(url: string) {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
}
// import { Directive, HostBinding, Input } from '@angular/core';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// @Directive({
//   selector: '[sanitizeHtml]'
// })
// export class SanitizeHtmlDirective {

//   @Input() sanitizeHtml: string;

//   constructor(private sanitizer: DomSanitizer) {
//   }

//   @HostBinding('innerHtml')
//   get innerHtml(): SafeHtml {
//     return this.sanitizer.bypassSecurityTrustHtml(this.sanitizeHtml);
//   }

// }
