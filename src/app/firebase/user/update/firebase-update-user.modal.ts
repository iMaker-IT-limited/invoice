import { Component, OnInit, Input } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray } from "@angular/forms";
import { Router } from "@angular/router";

import * as dayjs from "dayjs";

import { CheckboxCheckedValidator } from "../../../validators/checkbox-checked.validator";

import { FirebaseService } from "../../firebase-integration.service";
import { FirebaseUserModel } from "../firebase-user.model";
import { SelectUserImageModal } from "../select-image/select-user-image.modal";

@Component({
  selector: "app-firebase-update-user",
  templateUrl: "./firebase-update-user.modal.html",
  styleUrls: [
    "./styles/firebase-update-user.modal.scss",
    "./styles/firebase-update-user.shell.scss"
  ]
})
export class FirebaseUpdateUserModal implements OnInit {
  // "user" is passed in firebase-details.page
  @Input() userId: any;
  @Input() res: any;

  updateUserForm: FormGroup;
  // selectedAvatar: string;
  // skills = [];

  name: string;
  email: string;
  phone: number;
  company_intro: string;
  competition_exp: string;
  tutor_qual: string;
  downloadURL: any;
  cate_1: any;
  cate_2: any;
  cate_3: any;
  cate_4: any;
  target_user_age_lower: any;
  target_user_age_upper: any;
  class_size_lower: any;
  class_size_upper: any;
  class_length_upper: any;
  class_length_lower: any;
  constructor(
    private modalController: ModalController,
    public alertController: AlertController,
    public firebaseService: FirebaseService,
    public router: Router
  ) {}

  ngOnInit() {
    // id: "email10005"
    // address: "address129"
    // average_speed: 0
    // company_intro: "desc129"
    // competition_exp: "desc130"
    // contact_person: ""
    // tslint:disable-next-line:max-line-length
    // downloadURL: "https://firebasestorage.googleapis.com/v0/b/kun-van-kau.appspot.com/o/test%2F1580897477023_supplierlogo.png?alt=media&token=6c34544e-fd7a-4689-901e-0ebac54ff00a"
    // editor_choice: false
    // email: "email10005"
    // hashtag: "英文"
    // isShell: false
    // phone: "6719 2939"
    // provider: "俊慧智能發展中心"
    // reply_rate: 0
    // timestamp: ""
    // tutor_qual: "description131"
    // url: "http://www.mi-train.com/"

    console.log(this.res, this.userId);

    const supplier = this.res;
    this.name = supplier.name;
    this.email = supplier.email;
    this.phone = supplier.phone;
    this.target_user_age_lower = supplier.target_user_age.lower;
    this.target_user_age_upper = supplier.target_user_age.upper;
    this.class_size_lower = supplier.class_size.lower;
    this.class_size_upper = supplier.class_size.upper;
    this.class_length_lower = supplier.class_length.lower;
    this.class_length_upper = supplier.class_length.upper;
    this.company_intro = supplier.company_intro;
    this.competition_exp = supplier.competition_exp;
    this.tutor_qual = supplier.tutor_qual;
    this.downloadURL = supplier.downloadURL;
    this.cate_1 = supplier.cate_1;
    this.cate_2 = supplier.cate_2;
    this.cate_3 = supplier.cate_3;
    this.cate_4 = supplier.cate_4;

    // this.selectedAvatar = this.user.avatar;

    this.updateUserForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      //     lastname: new FormControl(this.user.lastname, Validators.required),
      email: new FormControl(
        this.email,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      phone: new FormControl(this.phone, Validators.required)
      // birthdate: new FormControl(
      //   dayjs.unix(this.user.birthdate).format("DD/MMMM/YYYY"),
      //   Validators.required
      // ),
      // skills: new FormArray(
      //   [],
      //   CheckboxCheckedValidator.minSelectedCheckboxes(1)
      // ),
      // spanish: new FormControl(this.user.languages.spanish),
      // english: new FormControl(this.user.languages.english),
      // french: new FormControl(this.user.languages.french)
    });

    // this.firebaseService.getSkills().subscribe(skills => {
    //   this.skills = skills;
    //   // create skill checkboxes
    //   this.skills.map(skill => {
    //     let userSkillsIds = [];
    //     if (this.user.skills) {
    //       userSkillsIds = this.user.skills.map(function(skillId) {
    //         return skillId["id"];
    //       });
    //     }
    //     // set the control value to 'true' if the user already has this skill
    //     const control = new FormControl(userSkillsIds.includes(skill.id));
    //     (this.updateUserForm.controls.skills as FormArray).push(control);
    //   });
    // });
  }

  // get skillsFormArray() {
  //   return <FormArray>this.updateUserForm.get("skills");
  // }

  // changeLangValue(value): string {
  //   switch (true) {
  //     case value <= 3:
  //       return "Novice";
  //     case value > 3 && value <= 6:
  //       return "Competent";
  //     case value > 6:
  //       return "Expert";
  //   }
  // }

  dismissModal() {
    this.modalController.dismiss();
  }

  // async deleteUser() {
  //   const alert = await this.alertController.create({
  //     header: "Confirm",
  //     message: "Do you want to delete " + this.user.name + "?",
  //     buttons: [
  //       {
  //         text: "No",
  //         role: "cancel",
  //         handler: () => {}
  //       },
  //       {
  //         text: "Yes",
  //         handler: () => {
  //           this.firebaseService.deleteUser(this.user.id).then(
  //             () => {
  //               this.dismissModal();
  //               this.router.navigate(["firebase/listing"]);
  //             },
  //             err => console.log(err)
  //           );
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  updateUser() {
    // this.user.avatar = this.selectedAvatar;
    this.name = this.updateUserForm.value.name;
    // this.user.lastname = this.updateUserForm.value.lastname;
    // this.user.birthdate = dayjs(this.updateUserForm.value.birthdate).unix(); // save it in timestamp
    this.phone = this.updateUserForm.value.phone;
    this.email = this.updateUserForm.value.email;
    // this.user.languages.spanish = this.updateUserForm.value.spanish;
    // this.user.languages.english = this.updateUserForm.value.english;
    // this.user.languages.french = this.updateUserForm.value.french;

    // get the ids of the selected skills
    // const selectedSkills = [];

    // this.updateUserForm.value.skills.map((value: any, index: number) => {
    //   if (value) {
    //     selectedSkills.push(this.skills[index].id);
    //   }
    // });
    // this.user.skills = selectedSkills;

    //    const { age, ...userData } = this.user;
    //   we don't want to save the age in the DB because is something that changes over time

    // this.firebaseService.updateUser(userData).then(
    //   () => this.modalController.dismiss(),
    //   err => console.log(err)
    // );
  }

  // async changeUserImage() {
  //   const modal = await this.modalController.create({
  //     component: SelectUserImageModal
  //   });

  //   modal.onDidDismiss().then(avatar => {
  //     if (avatar.data != null) {
  //       this.selectedAvatar = avatar.data.link;
  //     }
  //   });
  //   await modal.present();
  // }

  changeTargetValue(value): string {
    switch (true) {
      case value === 1:
        return "K1";
      case value === 2:
        return "K2";
      case value === 3:
        return "K3";
      case value === 4:
        return "P1";
      case value === 5:
        return "P2";
      case value === 6:
        return "P3";
      case value === 7:
        return "P4";
      case value === 8:
        return "P5";
      case value === 9:
        return "P6";
      case value === 10:
        return "S1";
      case value === 11:
        return "S2";
      case value === 12:
        return "S3";
      case value === 13:
        return "S4";
      case value === 14:
        return "S5";
      case value === 15:
        return "S6";
      case value === 16:
        return "大專";
      case value >= 17:
        return "";
      // case value <= 3:
      //   return "K1 - K3";
      // case value > 3 && value <= 6:
      //   return "P1 - P3";
      // case value > 6 && value <= 9:
      //   return "P4 - P6";
      // case value > 9 && value <= 12:
      //   return "S1 - S3";
      // case value > 12 && value <= 15:
      //   return "S4 - S6";
      // case value > 15:
      //   return "大專";
    }
  }
}
