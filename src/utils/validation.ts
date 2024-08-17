import * as yup from 'yup';

export const schema = yup.object({});

export type FormData = yup.InferType<typeof schema>;
