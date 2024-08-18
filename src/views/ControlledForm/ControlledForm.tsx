import { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import {
  CountriesDatalist,
  ErrorMessage,
  FormField,
  PasswordStrength,
} from '@/components';

import { useAppDispatch } from '@/hooks';

import {
  ControlledFormData,
  controlledFormSchema,
  formDataToFormEntry,
} from '@/utils';
import { addControlledFormEntry } from '@store/formsEntries/formsEntriesSlice';

import styles from '@/styles/Form.module.css';

const ControlledForm = () => {
  const id = useId();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<ControlledFormData>({
    resolver: yupResolver(controlledFormSchema),
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ControlledFormData> = async (data) => {
    const formEntry = await formDataToFormEntry(data);
    dispatch(addControlledFormEntry(formEntry));
    navigate('/');
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const matchError = password !== confirmPassword ? 'Passwords must match' : '';

  return (
    <main className={`container ${styles.form}`}>
      <h1 className={styles.title}>Controlled Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
        <FormField
          label="Username:"
          htmlFor={`${id}-username`}
          errorMessage={errors.username?.message}
        >
          <input {...register('username')} type="text" id={`${id}-username`} />
        </FormField>
        <FormField
          label="Age:"
          htmlFor={`${id}-age`}
          errorMessage={errors.age?.message}
        >
          <input {...register('age')} type="number" id={`${id}-age`} />
        </FormField>
        <FormField
          label="Email:"
          htmlFor={`${id}-email`}
          errorMessage={errors.email?.message}
        >
          <input {...register('email')} type="email" id={`${id}-email`} />
        </FormField>
        <FormField
          label="Password:"
          htmlFor={`${id}-password`}
          errorMessage={errors.password?.message}
        >
          <input
            {...register('password')}
            type="password"
            id={`${id}-password`}
          />
          <PasswordStrength password={password} />
        </FormField>
        <FormField
          label="Confirm password:"
          htmlFor={`${id}-confirmPassword`}
          errorMessage={errors.confirmPassword?.message ?? matchError}
        >
          <input
            {...register('confirmPassword')}
            type="password"
            id={`${id}-confirmPassword`}
          />
        </FormField>
        <fieldset className={styles.row}>
          <legend className={styles.subtitle}>Gender</legend>
          <FormField label="Male" htmlFor={`${id}-male`} horizontal noError>
            <input
              {...register('gender')}
              type="radio"
              id={`${id}-male`}
              value={'male'}
            />
          </FormField>
          <FormField label="Female" htmlFor={`${id}-female`} horizontal noError>
            <input
              {...register('gender')}
              type="radio"
              id={`${id}-female`}
              value={'female'}
            />
          </FormField>
          <FormField label="Other" htmlFor={`${id}-other`} horizontal noError>
            <input
              {...register('gender')}
              type="radio"
              id={`${id}-other`}
              value={'other'}
            />
          </FormField>
        </fieldset>
        <ErrorMessage message={errors.gender?.message} />
        <FormField
          label="I accept Terms and Conditions agreement"
          htmlFor={`${id}-t&c`}
          horizontal
          errorMessage={errors['t&c']?.message}
        >
          <input {...register('t&c')} type="checkbox" id={`${id}-t&c`} />
        </FormField>
        <FormField
          label="Select a picture:"
          htmlFor={`${id}-picture`}
          horizontal
          errorMessage={errors.picture?.message}
        >
          <input {...register('picture')} type="file" id={`${id}-picture`} />
        </FormField>
        <FormField
          label="Country:"
          htmlFor={`${id}-country`}
          errorMessage={errors.country?.message}
        >
          <input
            {...register('country')}
            type="text"
            id={`${id}-country`}
            list={`${id}-countries`}
          />
          <CountriesDatalist id={`${id}-countries`} />
        </FormField>
        <button
          type="submit"
          disabled={!(isValid && matchError === '')}
          className={styles.button}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ControlledForm;
