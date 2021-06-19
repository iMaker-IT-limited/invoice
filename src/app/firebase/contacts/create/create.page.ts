import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Validators, FormGroup, FormControl, FormArray, FormControlName } from "@angular/forms";
import * as dayjs from "dayjs";

import { FirebaseService } from "../../firebase-integration.service";

import { AuthService } from "./../../../../app/services/auth.service";
// import { SelectUserImageModal } from "../select-image/select-user-image.modal";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createUserForm: FormGroup;
  createSupplierForm: FormGroup;

  FilterForm: FormGroup;
  createContactForm: FormGroup;
  uid: string;
  email: string;

  constructor(
    private navCtrl: NavController,
    public firebaseService: FirebaseService,
    private authService: AuthService
  ) {
    this.uid = this.authService.uid();
    this.email = this.authService.email();

  }

  ngOnInit() {

    this.createContactForm = new FormGroup({
      type: new FormControl(""),
      unit: new FormControl(""),
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      company_name: new FormControl(""),
      customer_display_name: new FormControl(""),
      customer_email: new FormControl(""),
      work_phone: new FormControl(""),
      mobile_phone: new FormControl(""),
      website: new FormControl(""),
      description: new FormControl("")
    })

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
    //  this.modalController.dismiss();
    this.navCtrl.navigateBack('/firebase/contacts');
  }

  // CRUD
  createContact() {
    console.log(this.uid, this.email, this.createContactForm.value);
    this.firebaseService.createContacts(this.uid, this.email, this.createContactForm.value).then(() => {
      // this.dismissModal();
    });
  }

  // readContact() {
  //   console.log(this.email, this.uid);
  //   this.firebaseService.readContacts(this.uid, this.email).subscribe((res) => {
  //     console.log(res);

  //     // this.dismissModal();
  //   });
  // }

  // updateContact() {
  //   console.log(this.email, this.uid), this.createContactForm.value;
  //   this.firebaseService.updateContacts(this.uid, this.email, this.createContactForm.value).then(() => {
  //     //  this.dismissModal();
  //   });
  // }

  // deleteContact(contactId) {
  //   console.log(this.email, this.uid);
  //   this.firebaseService.deleteContacts(this.uid, this.email, contactId).then(() => {
  //     //  this.dismissModal();
  //   });
  // }


}