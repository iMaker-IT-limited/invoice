import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  pw: any;
  password: any;
  signin: string;

  photoURL: string;

  constructor() { }

  checkUserStatus() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if (user) {
            console.log(user);

            // User is signed in.
            // const displayName = user.displayName;
            // const email = user.email;
            // const emailVerified = user.emailVerified;
            // const photoURL = user.photoURL;
            // const uid = user.uid;
            // const phoneNumber = user.phoneNumber;
            // const providerData = user.providerData;
            // user.getIdToken().then(accessToken => {
            //   document.getElementById("sign-in-status").textContent = "Signed in";
            //   document.getElementById("sign-in").textContent = "Sign out";
            //   // document.getElementById("displayName").textContent = displayName;
            //   this.signin = "Sign out";
            //   this.displayName = displayName;
            //   this.uid = uid;
            //   this.email = email;
            //   this.photoURL = photoURL;
            //   document.getElementById(
            //     "account-details"
            //   ).textContent = JSON.stringify(
            //     {
            //       displayName: displayName,
            //       email: email,
            //       emailVerified: emailVerified,
            //       phoneNumber: phoneNumber,
            //       photoURL: photoURL,
            //       uid: uid,
            //       accessToken: accessToken,
            //       providerData: providerData
            //     },
            //     null,
            //     "  "
            //   );
            // });
          } else {
            // User is signed out.
            // document.getElementById("sign-in-status").textContent = "Signed out";
            // document.getElementById("sign-in").textContent = "Sign in";
            // this.signin = "Sign in";
            // document.getElementById("account-details").textContent = "null";
          }
        },
        function (error) {
          console.log(error);
        }
      );
    });
  }

  registerUser(value) {
    console.log(value);
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(user => {
          if (user) {
            user.user.updateProfile({
              displayName: value.displayName,
              photoURL: ""
            });
          }
        });
      // (user) => {
      //   if (user) {
      //     user.user.updateProfile({
      //       displayName: value.displayName,
      //       photoURL: ''
      //     });
      //   }
      // });
      // res => resolve(res),
      // err => reject(err));
    });
  }

  registerUserAsShiShaBarOwner(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(user => {
          if (user) {
            user.user.updateProfile({
              displayName: "shishabarowner",
              photoURL: ""
            });
          }
        });
      // res => resolve(res),
      // err => reject(err));
    });
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("LOG Out");
            //    resolve();
          })
          .catch(error => {
            reject();
          });
      }
    });
  }

  userDetails() {
    return firebase.auth().currentUser;
  }

  uid() {
    return firebase.auth().currentUser.uid;
  }

  email() {
    return firebase.auth().currentUser.email;
  }

  displayName() {
    return firebase.auth().currentUser.displayName;
  }

}
