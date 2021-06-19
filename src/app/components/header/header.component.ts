import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NavController, PopoverController } from "@ionic/angular";
import * as firebase from "firebase";
import { Storage } from "@ionic/storage";
import { PopOverComponent } from '../../../app/pop-over/pop-over.component';
import { NotificationsPage } from '../../../app/notifications/notifications.page';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() color = "primary";
  @Input() isModal = false;
  uid: string;
  displayName: string;
  photoURL: string;
  signin: string;
  isAnonymous: boolean;
  email: string;

  slideOptsTut = {
    slidesPerView: 2.5,
    // speed: 400
  };

  slideOpts = {
    slidesPerView: 2.5,
    // speed: 400
  };

  private url = 'https://docs.google.com/forms/d/e/1FAIpQLScV-zQUczmjcsFmNRn9Z7k0sr51BlOm2qaICgs-tq3P6OfG3g/viewform?usp=sf_link';
  lastSignInTime: string;
  creationTime: string;

  constructor(
    public router: Router,
    private storage: Storage,
    private popoverController: PopoverController,
    private navCtrl: NavController) {
    this.checkUserStatus();
    console.log('enter header', this.url);

  }

  ngOnInit() {
    this.checkUserStatus();
    console.log('enter header oninit');
  }

  onaboutus() {
    this.navCtrl.navigateRoot("/about-us");
  }
  onaboutussubmenu1() {
    this.navCtrl.navigateRoot("/about-us-submenu1");
  }
  onaboutussubmenu2() {
    this.navCtrl.navigateRoot("/about-us-submenu2");
  }
  onaboutussubmenu3() {
    this.navCtrl.navigateRoot("/about-us-submenu3");
  }
  onjoinussubmenu1() {
    this.navCtrl.navigateRoot("/contact-us-submenu1");
  }
  onjoinussubmenu2() {
    this.navCtrl.navigateRoot("/contact-us-submenu2");
  }
  onjoinussubmenu3() {
    this.navCtrl.navigateRoot("/contact-us-submenu3");
  }
  onjoinus() {
    this.navCtrl.navigateRoot("/join-us");
  }

  oncontactus() {
    this.navCtrl.navigateRoot("contact-us");
  }
  oncategoriespage() {
    this.navCtrl.navigateRoot("/");
  }

  checkUserStatus() {
    firebase.auth().onAuthStateChanged(
      user => {
        console.log('header user is: ', user, user.metadata.creationTime);

        if (user) {
          this.creationTime = user.metadata.creationTime;
          this.lastSignInTime = user.metadata.lastSignInTime;
          // User is signed in.
          const isAnonymous = user.isAnonymous;
          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          console.log(user, this.photoURL, this.displayName);
          const displayName = user.displayName;
          const email = user.email;
          this.email = email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const phoneNumber = user.phoneNumber;
          const providerData = user.providerData;
          user.getIdToken().then(accessToken => {
            console.log("accessToken: ", accessToken);

            // document.getElementById("sign-in-status").textContent = "Signed in";
            // document.getElementById("sign-in").textContent = "Sign out";
            this.signin = "Sign out";
            this.isAnonymous = isAnonymous;
            this.displayName = displayName;
            this.uid = uid;
            this.email = email;
            this.photoURL = photoURL;
          });

          // this.navCtrl.navigateForward("/firebase/categories");
          //   this.navCtrl.navigateForward("/firebase/categories");
        } else {
          // User is signed out.
          // document.getElementById("sign-in-status").textContent = "Signed out";
          // document.getElementById("sign-in").textContent = "Sign in";
          this.signin = "Sign in";
          // document.getElementById("account-details").textContent = "null";
          //    this.navCtrl.navigateForward("/auth/signup");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  onSignIn() {
    // app/auth/signup
    this.navCtrl.navigateForward('app/auth/signup');
  }

  onSignOut() {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          // User is signed in.
          const isAnonymous = user.isAnonymous;
          this.uid = user.uid;
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          console.log(user, isAnonymous);
          const displayName = user.displayName;
          const email = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const uid = user.uid;
          const phoneNumber = user.phoneNumber;
          const providerData = user.providerData;
          user.getIdToken().then(accessToken => {
            console.log("accessToken: ", accessToken);

            // document.getElementById("sign-in-status").textContent = "Signed in";
            // document.getElementById("sign-in").textContent = "Sign out";
            this.signin = "Sign out";
            this.isAnonymous = isAnonymous;
            this.displayName = displayName;
            this.uid = uid;
            this.email = email;
            this.photoURL = photoURL;
          });

          firebase
            .auth()
            .signOut()
            .then(() => {
              this.storage.remove("firebaseui::rememberedAccounts");
              console.log("signed out");
              // User is signed out.
              // document.getElementById("sign-in-status").textContent =
              // "Signed out";
              // document.getElementById("sign-in").textContent = "Sign in";
              this.signin = "Sign in";
              // document.getElementById("account-details").textContent = "null";

              this.navCtrl.navigateForward("/app/auth/signup");
            })
            .catch(error => { });
        } else {
          // User is signed out.
          // document.getElementById("sign-in-status").textContent = "Signed out";
          // document.getElementById("sign-in").textContent = "Sign in";
          this.signin = "Sign in";
          // document.getElementById("account-details").textContent = "null";
          //    this.navCtrl.navigateForward("/auth/signup");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  }

  onProfilePage() {
    this.navCtrl.navigateForward('firebase/user-profile');

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      translucent: false,
      cssClass: 'popover-profile',
      backdropDismiss: true,
      mode: 'ios'
    });
    return await popover.present();
  }

  async presentPopoverNotification(ev: any) {
    // const popover = await this.popoverController.create({
    //   component: NotificationsPage,
    //   event: ev,
    //   translucent: false,
    //   cssClass: 'popover-notifications',
    //   backdropDismiss: true,
    //   mode: 'ios'
    // });
    // return await popover.present();
  }

  onblogpage() {
    console.log('Blog page');
    //   this.navCtrl.navigateForward('firebase/notifications');

  }
}
