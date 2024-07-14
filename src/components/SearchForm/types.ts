export interface SearchFormProps {
  initialSearchQuery: string;
  onFormSubmit: (newSearchQuery: string) => void;
}
