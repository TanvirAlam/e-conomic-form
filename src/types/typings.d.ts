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
    _type: "e-form";
    label: string;
    inputTypes: InputsTypes[];
    error: string;
    toolkit: string;
}
