import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray } from "@angular/forms";
import * as dayjs from "dayjs";

import { CheckboxCheckedValidator } from "../../../validators/checkbox-checked.validator";

import { FirebaseService } from "../../firebase-integration.service";
import {
  FirebaseUserModel,
  FirebaseSupplierModel
} from "../firebase-user.model";
import { SelectUserImageModal } from "../select-image/select-user-image.modal";

@Component({
  selector: "app-firebase-create-user",
  templateUrl: "./firebase-create-user.modal.html",
  styleUrls: [
    "./styles/firebase-create-user.modal.scss",
    "./styles/firebase-create-user.shell.scss"
  ]
})
export class FirebaseCreateUserModal implements OnInit {
  createUserForm: FormGroup;
  createSupplierForm: FormGroup;
  supplierData: FirebaseSupplierModel = new FirebaseSupplierModel();
  userData: FirebaseUserModel = new FirebaseUserModel();
  skills = [];

  cate_1 = {
    name: { 0: "STEM", 1: "學術", 2: "運動", 3: "舞蹈" },
    list: [
      "Lego Education",
      "Micro：bit",
      "mBot",
      "Scratch",
      "Arduino",
      "3D print",
      "Dash and Dot",
      "VR",
      "種植項目"
    ],
    list2: [
      "中文",
      "英文",
      "數學",
      "phonics",
      "劍橋英語",
      "奧數",
      "珠心算",
      "普通話",
      "朗誦",
      "辯論",
      "書法",
      "新來港學童廣東話班",
      "日語",
      "韓語",
      "西班牙語",
      "法語"
    ],
    list3: [
      "手球隊",
      "足球隊",
      "籃球隊",
      "排球隊",
      "乒乓球",
      "羽毛球",
      "田徑隊",
      "跆拳道",
      "空手道",
      "柔道",
      "足毽",
      "游泳",
      "水上活動",
      "壁球",
      "欖球",
      "射箭",
      "武術",
      "閃避球",
      "跳繩",
      "武術",
      "網球",
      "體適能",
      "其他"
    ],
    list4: [
      "芭蕾舞",
      "社交舞",
      "街舞",
      "K-Pop舞",
      "現代舞",
      "中國舞",
      "爵士舞",
      "Hip-Hop舞"
    ]
  };
  FilterForm: FormGroup;

  constructor(
    private modalController: ModalController,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    // default image
    // this.downloadURL =
    //   "https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png";

    // this.FilterForm = new FormGroup({
    //   cate_1: new FormControl(""),
    //   cate_2: new FormControl(""),
    //   cate_3: new FormControl(""),
    //   cate_4: new FormControl(""),
    //   first: new FormControl({ lower: 1, upper: 40 }),
    //   second: new FormControl({ lower: 1, upper: 18 }),
    //   dual: new FormControl({ lower: 1, upper: 40 }),
    //   teaching_materials: new FormControl("rental")
    // });

    this.createSupplierForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),

      cate_1: new FormControl(""),
      cate_2: new FormControl(""),
      cate_3: new FormControl(""),
      cate_4: new FormControl(""),
      average_speed: new FormControl(0),
      reply_rate: new FormControl(0),
      editor_choice: new FormControl(),
      class_size: new FormControl({ lower: 1, upper: 42 }),
      target_user_age: new FormControl({ lower: 1, upper: 16 }),
      class_length: new FormControl({ lower: 1, upper: 42 }),
      // teaching_materials: new FormControl("rental"),
      company_intro: new FormControl(),
      tutor_qual: new FormControl(),
      competition_exp: new FormControl()
    });

    // this.createUserForm = new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   lastname: new FormControl('', Validators.required),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   phone: new FormControl('', Validators.required),
    //   birthdate: new FormControl(Validators.required),
    //   skills: new FormArray([], CheckboxCheckedValidator.minSelectedCheckboxes(1)),
    //   spanish: new FormControl(),
    //   english: new FormControl(),
    //   french: new FormControl()
    // });

    // this.firebaseService.getSkills().subscribe(skills => {
    //   this.skills = skills;
    //   // create skill checkboxes
    //   this.skills.map(() => {
    //     (this.createUserForm.controls.skills as FormArray).push(new FormControl());
    //   });
    // });
  }

  // get skillsFormArray() { return <FormArray>this.createUserForm.get('skills'); }

  changeLangValue(value): string {
    switch (true) {
      case value <= 3:
        return "Novice";
      case value > 3 && value <= 6:
        return "Competent";
      case value > 6:
        return "Expert";
    }
  }

  submitFilterForm() {
    console.log(this.FilterForm.value);
    // this.firebaseService.getAllSupplier().subscribe(res => {
    //   console.log(res);
    // });
  }

  rangeChange(range: Range) {
    console.log("range change", range);
  }
  rangeChangeSecond(range: Range) { }

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

  onReset() {
    this.createSupplierForm = new FormGroup({
      name: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      cate_1: new FormControl(""),
      cate_2: new FormControl(""),
      cate_3: new FormControl(""),
      cate_4: new FormControl(""),
      average_speed: new FormControl(0),
      reply_rate: new FormControl(0),
      editor_choice: new FormControl(),
      class_size: new FormControl({ lower: 10, upper: 42 }),
      target_user_age: new FormControl({ lower: 10, upper: 16 }),
      class_length: new FormControl({ lower: 10, upper: 42 }),
      // teaching_materials: new FormControl("rental"),
      company_intro: new FormControl(),
      tutor_qual: new FormControl(),
      competition_exp: new FormControl()
    });
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  createSupplier() {
    // this.supplierData.cate_1 = this.createSupplierForm.value.cate_1;
    // this.supplierData.cate_2 = this.createSupplierForm.value.cate_2;
    // this.supplierData.cate_3 = this.createSupplierForm.value.cate_3;
    // this.supplierData.cate_4 = this.createSupplierForm.value.cate_4;
    this.supplierData.name = this.createSupplierForm.value.name;
    this.supplierData.email = this.createSupplierForm.value.email;
    this.supplierData.phone = this.createSupplierForm.value.phone;
    this.supplierData.editor_choice = this.createSupplierForm.value.editor_choice;
    this.supplierData.average_speed = this.createSupplierForm.value.average_speed;
    this.supplierData.reply_rate = this.createSupplierForm.value.reply_rate;
    this.supplierData.company_intro = this.createSupplierForm.value.company_intro;
    this.supplierData.tutor_qual = this.createSupplierForm.value.tutor_qual;
    this.supplierData.competition_exp = this.createSupplierForm.value.competition_exp;

    console.log(this.createSupplierForm.value);
    console.log(this.supplierData);

  }

  // createUser() {
  //   this.userData.name = this.createUserForm.value.name;
  //   this.userData.lastname = this.createUserForm.value.lastname;
  //   this.userData.birthdate = dayjs(this.createUserForm.value.birthdate).unix(); // save it in timestamp
  //   this.userData.phone = this.createUserForm.value.phone;
  //   this.userData.email = this.createUserForm.value.email;
  //   this.userData.languages.spanish = this.createUserForm.value.spanish;
  //   this.userData.languages.english = this.createUserForm.value.english;
  //   this.userData.languages.french = this.createUserForm.value.french;

  //   const selectedSkills = [];

  //   this.createUserForm.value.skills.map((value: any, index: number) => {
  //     if (value) {
  //       selectedSkills.push(this.skills[index].id);
  //     }
  //   });
  //   this.userData.skills = selectedSkills;

  //   this.firebaseService.createUser(this.userData).then(() => {
  //     this.dismissModal();
  //   });
  // }

  // async changeUserImage() {
  //   const modal = await this.modalController.create({
  //     component: SelectUserImageModal
  //   });

  //   modal.onDidDismiss().then(avatar => {
  //     if (avatar.data != null) {
  //       this.userData.avatar = avatar.data.link;
  //     }
  //   });
  //   await modal.present();
  // }
}
