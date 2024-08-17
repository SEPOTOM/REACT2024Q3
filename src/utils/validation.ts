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
});

export type FormData = yup.InferType<typeof schema>;
