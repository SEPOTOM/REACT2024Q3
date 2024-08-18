import { CountriesDatalistProps } from '@components/CountriesDatalist/types';

import { useAppSelector } from '@/hooks';

import { selectCountries } from '@store/countries/countriesSlice';

const CountriesDatalist = ({ id }: CountriesDatalistProps) => {
  const countries = useAppSelector(selectCountries);

  return (
    <datalist id={id}>
      {countries.map((country) => (
        <option value={country} key={country} />
      ))}
    </datalist>
  );
};

export default CountriesDatalist;
