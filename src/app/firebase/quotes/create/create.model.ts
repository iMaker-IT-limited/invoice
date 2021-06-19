import { ShellModel } from "./../../../shell/data-store";

export class FirebaseSkillModel extends ShellModel {
    id: string;
    name: string;

    constructor() {
        super();
    }
}

export class FirebaseEnquiryModel extends ShellModel {
    id: string;
    cate_1: string;
    class_size_lower: string;
    class_size_upper: string;
    target_user_age_lower: string;
    target_user_age_upper: string;
    class_length_lower: string;
    class_length_upper: string;
    teaching_materials: string;
    potential_supplier: string;
    timestamp: string;
    constructor() {
        super();
    }
}

export class FirebaseSupplierModel extends ShellModel {
    id: string;
    name: string;
    address: string;
    average_speed: number;
    company_intro: string;
    competition_exp: string;
    contact_person: string;
    downloadURL: string;
    editor_choice: boolean;
    email: string;
    hashtag: any;
    isShell: boolean;
    phone: number;
    provider: string;
    reply_rate: number;
    timestamp: any;
    tutor_qual: string;
    url: string;
    path: any;
    constructor() {
        super();
    }
}

// assign 'teacher' or 'supplier'
export class FirebaseRoleModel extends ShellModel {
    id: string;
    role: string;

    constructor() {
        super();
    }
}

export class FirebaseUserModel extends ShellModel {
    id: string;
    avatar: string;
    name: string;
    lastname: string;
    email: string;
    phone: number;
    age?: number;
    birthdate: number; // timestamp
    skills: Array<any> = ["", "", ""];
    languages: {
        spanish: number;
        english: number;
        french: number;
    } = {
            spanish: 0,
            english: 0,
            french: 0
        };

    constructor() {
        super();
    }
}
export class FirebaseCombinedUserModel extends FirebaseUserModel {
    skills: Array<FirebaseSkillModel> = [
        new FirebaseSkillModel(),
        new FirebaseSkillModel(),
        new FirebaseSkillModel()
    ];

    constructor() {
        super();
    }
}
