import * as yup from 'yup';

import { store } from '@store/store';

import { selectCountries } from '@store/countries/countriesSlice';
import { Regexps } from '@/consts';

const countries = selectCountries(store.getState());

const HALF_MB = 524288;
const PICTURE_FORMATS = ['image/jpeg', 'image/png'];

enum Genders {
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
  country: (typeof countries)[number];
  picture: FileList;
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

export const schema: yup.ObjectSchema<CustomFormData> = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .matches(/^[A-Z]/, 'Username must start with an uppercase letter'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .matches(Regexps.NUMBER, 'Password must contain at least one number')
    .matches(
      Regexps.LOWERCASE,
      'Password must contain at least one lowercase letter',
    )
    .matches(
      Regexps.UPPERCASE,
      'Password must contain at least one uppercase letter',
    )
    .matches(
      Regexps.SPECIAL_SYMBOLS,
      'Password must contain at least one special character - @$!%*?&',
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(
      Object.values(Genders),
      'Gender must be one of: male, female, other',
    ),
  't&c': yup
    .boolean()
    .transform((value: string | boolean) => {
      return value === 'on' || value === true;
    })
    .required('You must accept Terms and Conditions agreement')
    .oneOf([true], 'You must accept Terms and Conditions agreement'),
  country: yup
    .string()
    .required('Country is required')
    .oneOf(countries, 'You must choose a country from the list'),
  picture: yup
    .mixed<FileList>()
    .required('Picture is required')
    .test('required', 'Picture is required', (value) => value?.length !== 0)
    .test(
      'is-less-than-0.5MB',
      'Picture size should not exceed 0.5MB',
      (value) => !value || (value[0] && value[0].size <= HALF_MB),
    )
    .test(
      'is-correct-format',
      'Unsupported format, only PNG and JPEG are allowed',
      (value) =>
        !value || (value[0] && PICTURE_FORMATS.includes(value[0].type)),
    ),
});

export const validateForm = async (
  formData: FormData,
): Promise<{
  errors: FormErrors;
  isValid: boolean;
}> => {
  const errors: FormErrors = {
    username: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    't&c': '',
    picture: '',
    gender: '',
  };
  let isValid = true;

  const formDataObject = Object.fromEntries(formData.entries());

  try {
    await schema.validate(formDataObject, { abortEarly: false });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      isValid = false;

      err.inner.forEach((error) => {
        if (error.path) {
          errors[error.path as keyof FormErrors] = error.message;
        }
      });
    } else {
      throw err;
    }
  }

  return {
    isValid,
    errors,
  };
};
