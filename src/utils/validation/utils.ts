import * as yup from 'yup';

import { uncontrolledFormSchema } from '@/utils/validation/schemas';

import { FormErrors } from '@utils/validation/types';

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
    await uncontrolledFormSchema.validate(formDataObject, {
      abortEarly: false,
    });
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
