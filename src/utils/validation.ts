import * as yup from 'yup';

export const schema = yup.object({
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
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(
      /[@$!%*?&]/,
      'Password must contain at least one special character - @$!%*?&',
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Confirm Passwords must match'),
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(
      ['male', 'female', 'other'],
      'Gender must be one of: male, female, other',
    ),
  't&c': yup
    .boolean()
    .oneOf([true], 'You must accept Terms and Conditions agreement'),
});

export type FormData = yup.InferType<typeof schema>;
