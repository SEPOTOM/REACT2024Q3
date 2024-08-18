import { FormData } from '@/utils';

export interface FormEntry extends Omit<FormData, 'picture'> {
  picture: string;
}

export interface FromEntriesState {
  controlledFormEntries: FormEntry[];
  uncontrolledFormEntries: FormEntry[];
}
