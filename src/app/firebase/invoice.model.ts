import { ShellModel } from "./../shell/data-store";

// export class FirebaseSkillModel extends ShellModel {
//     id: string;
//     name: string;

//     constructor() {
//         super();
//     }
// }

// export class FirebaseEnquiryModel extends ShellModel {
//     id: string;
//     cate_1: string;
//     class_size_lower: string;
//     class_size_upper: string;
//     target_user_age_lower: string;
//     target_user_age_upper: string;
//     class_length_lower: string;
//     class_length_upper: string;
//     teaching_materials: string;
//     potential_supplier: string;
//     timestamp: string;
//     constructor() {
//         super();
//     }
// }

// export class FirebaseSupplierModel extends ShellModel {
//     id: string;
//     name: string;
//     address: string;
//     average_speed: number;
//     company_intro: string;
//     competition_exp: string;
//     contact_person: string;
//     downloadURL: string;
//     editor_choice: boolean;
//     email: string;
//     hashtag: any;
//     isShell: boolean;
//     phone: number;
//     provider: string;
//     reply_rate: number;
//     timestamp: any;
//     tutor_qual: string;
//     url: string;
//     path: any;
//     constructor() {
//         super();
//     }
// }

export class PresetCompanyProfileModel extends ShellModel {

    "Company Name": string;
    "Address": string;
    "Tel": string;
    "Fax": string;

    constructor() {
        super();
    }
}
export class ContactModel extends ShellModel {

    "Created Time": string;
    "Last Modified Time": string;
    "Customer ID": number;
    "Customer Name": string;
    "Display Name": string;
    "Company Name": string;
    "Salutation": string;
    "First Name": string;
    "Last Name": string;
    "EmailID": string;
    "Phone": string;
    "MobilePhone": string;
    "Skype Identity": string;
    "Facebook": string;
    "Twitter": string;
    "Department": string;
    "Designation": string;
    "Credit Limit": number;
    "Price List": string;
    "Payment Terms": number;
    "Payment Terms Label": string;
    "Currency Code": string;
    "Notes": string;
    "Website": string;
    "Contact Type": string;
    "Customer Sub Type": string;
    "Customer Address ID": number;
    "Billing Attention": string;
    "Billing Address": string;
    "Billing Street2": string;
    "Billing City": string;
    "Billing State": string;
    "Billing Country": string;
    "Billing Code": string;
    "Billing Phone": string;
    "Billing Fax": string;
    "Shipping Attention": string;
    "Shipping Address": string;
    "Shipping Street2": string;
    "Shipping City": string;
    "Shipping State": string;
    "Shipping Country": string;
    "Shipping Code": string;
    "Shipping Phone": string;
    "Shipping Fax": string;
    "Source": number;
    "Reference ID": string;
    "Payment Reminder": number;
    "Last Sync Time": string;
    "Status": string;
    "Owner Name": string;
    "CF.Email": string;
    "CF.Phone": string;
    "CF.Company Name": string;

    constructor() {
        super();
    }
}

export class ItemModel extends ShellModel {

    "Item ID": number;
    "Item Name": string;
    "Description": string;
    "Rate": number;
    "Tax1 Name": string;
    "Tax1 Percentage": string;
    "Tax1 Type": string;
    "Product Type": string;
    "Source": number;
    "Reference ID": string;
    "Last Sync Time": string;
    "Status": string;
    "Usage unit": string;

    // by default = 1
    "quantity": number;
    // by default = Rate x quantity 
    // not so important variable as we only care about the total amount in a quatation
    "amount": number;
    constructor() {
        super();
    }
}

export class EstimateModel extends ShellModel {

    "Estimate Date": string;
    "Estimate ID": number;
    "Estimate Number": string;
    "Estimate Status": string;
    "Customer ID": number;
    "Expiry Date": string;
    "PurchaseOrder": string;
    "Currency Code": string;
    "Exchange Rate": number;
    "Discount Type": string;
    "Is Discount Before Tax": number;
    "Entity Discount Percent": number;
    "Is Inclusive Tax": number;
    "SubTotal": number;
    "Total": number;
    "Adjustment": number;
    "Notes": string;
    'Terms': string;
    "Terms & Conditions": string;
    "Customer Name": string;
    "Project Name": string;
    "Project ID": string;
    "Sales person": string;
    "Billing Address": string;
    "Billing City": string;
    "Billing State": string;
    "Billing Country": string;
    "Billing Code": string;
    "Billing Fax": string;
    "Template Name": string;
    "Adjustment Description": string;
    "Shipping Address": string;
    "Shipping City": string;
    "Shipping State": string;
    "Shipping Country": string;
    "Shipping Code": string;
    "Shipping Fax": string;
    "Source": number;
    "Reference ID": string;
    "Last Sync Time": string;
    "Shipping Charge": number;
    "Shipping Charge Tax ID": string;
    "Shipping Charge Tax Amount": string;
    "Shipping Charge Tax Name": string;
    "Shipping Charge Tax %": string;
    "Shipping Charge Tax Type": string;
    "Item Name": string;
    "Item Desc": string;
    "Quantity": number;
    "Discount": number;
    "Discount Amount": number;
    "Item Tax Amount": number;
    "Item Total": number;
    "Account": string;
    "SKU": string;
    "Usage unit": string;
    "Item Price": number;
    "Tax ID": string;
    "Item Tax": string;
    "Item Tax %": string;
    "Item Tax Type": string;
    salesList: {
        "Item Name": string;
        Description: string;
        quantity: number;
        Rate: number;
        amount: number;
    }[] = [];

    constructor() {
        super();
    }
}

export class InvoiceModel extends ShellModel {

    "Invoice Date": string;
    "Invoice ID": number;
    "Invoice Number": string;
    "Estimate Number": string;
    "Invoice Status": string;
    "Customer Name": string;
    "Company Name": string;
    "Customer ID": number;
    "Branch ID": string;
    "Branch Name": string;
    "Due Date": string;
    "Expected Payment Date": string;
    "PurchaseOrder": string;
    "Template Name": string;
    "Currency Code": string;
    "Exchange Rate": number;
    "Discount Type": string;
    "Is Discount Before Tax": boolean;
    "Entity Discount Percent": number;
    "Entity Discount Amount": number;
    "Item Name": string;
    "Item Desc": string;
    "Quantity": number;
    "Usage unit": string;
    "Item Price": number;
    "Discount": number;
    "Discount Amount": number;
    "Expense Reference ID": string;
    "Project ID": string;
    "Project Name": string;
    "Is Inclusive Tax": boolean;
    "Tax1 ID": string;
    "Item Tax1": string;
    "Item Tax1 %": string;
    "Item Tax1 Amount": string;
    "Item Tax1 Type": string;
    "Item Total": number;
    "SubTotal": number;
    "Total": number;
    "Balance": number;
    "Shipping Charge": number;
    "Shipping Charge Tax ID": string;
    "Shipping Charge Tax Amount": string;
    "Shipping Charge Tax Name": string;
    "Shipping Charge Tax %": string;
    "Shipping Charge Tax Type": string;
    "Adjustment": number;
    "Adjustment Description": string;
    "Round Off": number;
    "Sales person": string;
    "Payment Terms": number;
    "Payment Terms Label": string;
    "Last Payment Date": string;
    "Notes": string;
    "Terms & Conditions": string;
    "Subject": string;
    "LateFee Name": string;
    "LateFee Type": string;
    "LateFee Rate": number;
    "LateFee Amount": number;
    "LateFee Frequency": string;
    "WriteOff Date": string;
    "WriteOff Exchange Rate": number;
    "WriteOff Amount": number;
    "Recurrence Name": string;
    "PayPal": boolean;
    "Authorize.Net": boolean;
    "Google Checkout": boolean;
    "Payflow Pro": boolean;
    "Stripe": boolean;
    "2Checkout": boolean;
    "Braintree": boolean;
    "Forte": boolean;
    "WorldPay": boolean;
    "Payments Pro": boolean;
    "Square": boolean;
    "WePay": boolean;
    "Razorpay": boolean;
    "GoCardless": boolean;
    "Partial Payments": boolean;
    "Billing Address": string;
    "Billing City": string;
    "Billing State": string;
    "Billing Country": string;
    "Billing Code": string;
    "Billing Fax": string;
    "Billing Phone": string;
    "Shipping Address": string;
    "Shipping City": string;
    "Shipping State": string;
    "Shipping Country": string;
    "Shipping Code": string;
    "Shipping Fax": string;
    "Shipping Phone Number": string;
    "Terms": string;
    salesList: {
        "Item Name": string;
        Description: string;
        quantity: number;
        Rate: number;
        amount: number;
    }[] = [];

    constructor() {
        super();
    }
}

export class PaymentReceivedModel extends ShellModel {

    constructor() {
        super();
    }
}