export interface SearchFormState {
  inputValue: string;
}

export interface SearchFormProps {
  onSubmit: (newSearchQuery: string) => void;
}
