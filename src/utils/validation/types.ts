import { Countries } from '@store/countries/countriesSlice';

export enum Genders {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface CustomFormData {
  username: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: Genders;
  't&c': boolean;
  country: Countries[number];
}

export interface ControlledFormData extends CustomFormData {
  picture: FileList;
}

export interface UncontrolledFormData extends CustomFormData {
  picture: File;
}

export interface FormErrors {
  username: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  't&c': string;
  country: string;
  picture: string;
}
