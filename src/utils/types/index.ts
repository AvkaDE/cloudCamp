export type TOptionItem = {
  value: string;
  selected?: boolean;
  id: string;
};

type TRadioItems = {
  title: string;
  id: string;
  name: string;
  value: string;
};

export type TFormlabelProps = {
  label?: string;
  type: "text" | "number" | "email" | "tel" | "radio" | "select";
  placeholder?: string;
  id?: string;
  multipleFields?: TOptionItem[];
  optionItems?: TOptionItem[];
  radioItems?: TRadioItems[];
};
