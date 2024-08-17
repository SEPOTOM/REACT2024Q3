import * as yup from 'yup';

export const schema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .matches(/^[A-Z]/, 'Username must start with an uppercase letter'),
});

export type FormData = yup.InferType<typeof schema>;
