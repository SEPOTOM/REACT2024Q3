export interface SearchFormState {
  inputValue: string;
}

export interface SearchFormProps {
  onInputUpdate: (newValue: string) => void;
}
