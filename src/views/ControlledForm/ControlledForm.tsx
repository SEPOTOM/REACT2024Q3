import { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ErrorMessage, FormField, PasswordStrength } from '@/components';

import { FormData, schema } from '@/utils';

import styles from '@views/ControlledForm/ControlledForm.module.css';

const ControlledForm = () => {
  const id = useId();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const matchError =
    password !== confirmPassword ? 'Confirm Passwords must match' : '';

  return (
    <main className={`container ${styles.controlledForm}`}>
      <h1 className={styles.controlledFormTitle}>Controlled Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.controlledFormContent}
      >
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
        <fieldset className={styles.controlledFormRow}>
          <legend className={styles.controlledFormSubtitle}>Gender</legend>
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
          <input {...register('country')} type="text" id={`${id}-country`} />
        </FormField>
        <button
          type="submit"
          disabled={!(isValid && matchError === '')}
          className={styles.controlledFormButton}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ControlledForm;
