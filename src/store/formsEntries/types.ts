import { CustomFormData } from '@/utils';

export interface FormEntry extends Omit<CustomFormData, 'picture'> {
  picture: string;
}

export interface FromEntriesState {
  controlledFormEntries: FormEntry[];
  uncontrolledFormEntries: FormEntry[];
}
