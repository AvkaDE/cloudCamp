export type TOptionItem = {
  value: string;
  selected?: boolean;
  id: string;
};

export type TRadioItem = {
  id: number;
  selected?: boolean;
  fieldId?: string;
};

export type TCheckboxItem = {
  label: number | string;
  id: number;
  fieldId: string;
  selected: boolean;
};

export type TFormlabelProps = {
  label?: string;
  type:
    | "text"
    | "number"
    | "email"
    | "tel"
    | "radio"
    | "select"
    | "textarea"
    | "checkbox";
  placeholder?: string;
  id?: string;
  optionItems?: TOptionItem[];
  radioItems?: TRadioItem[];
  selected?: boolean;
  groupName?: string;
};
