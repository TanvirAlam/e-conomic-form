interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface InputsTypes extends SanityBody {
    _type: "inputs";
    title: string;
    value: string;
}

export interface EForms extends SanityBody {
    inputOptions: any;
    _type: "e-form";
    label: string;
    inputTypes: InputsTypes[];
    error: string;
    toolkit: string;
}

export interface StateObject {
    formSubmit: boolean;
    flName: string;
    isFLNameEmpty: boolean;
    phone: number;
    isPhoneEmpty: boolean;
    email: string;
    isEmailEmpty: boolean;
    acceptence: boolean;
    newsletter: boolean;
}