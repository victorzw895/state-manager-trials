export interface Event {
    id: string;
    title: string;
    date: string;
    guests: string[];
    description: string;
    createdBy: string
}

export interface User {
    id: string;
    name: string;
}

interface FormInputs extends HTMLFormControlsCollection   {
  title: HTMLInputElement;
  date: HTMLInputElement;
  guests: HTMLInputElement;
  description: HTMLInputElement;
}
 
export interface EventFormType extends HTMLFormElement {
  readonly elements: FormInputs;
}