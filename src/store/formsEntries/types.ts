import { CustomFormData } from '@/utils';

export interface FormEntry extends CustomFormData {
  picture: string;
  isNew: boolean;
}

export interface FromEntriesState {
  controlledFormEntries: FormEntry[];
  uncontrolledFormEntries: FormEntry[];
}
