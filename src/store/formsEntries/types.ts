import { CustomFormData } from '@/utils';

export interface FormEntry extends CustomFormData {
  picture: string;
}

export interface FromEntriesState {
  controlledFormEntries: FormEntry[];
  uncontrolledFormEntries: FormEntry[];
}
