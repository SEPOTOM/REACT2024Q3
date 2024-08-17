import { useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormField } from '@/components';

import { FormData, schema } from '@/utils';

import styles from '@views/ControlledForm/ControlledForm.module.css';

const ControlledForm = () => {
  const id = useId();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

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
        <FormField label="Age:" htmlFor={`${id}-age`}>
          <input name="age" type="number" id={`${id}-age`} required />
        </FormField>
        <FormField label="Email:" htmlFor={`${id}-email`}>
          <input name="email" type="email" id={`${id}-email`} required />
        </FormField>
        <FormField label="Password:" htmlFor={`${id}-password`}>
          <input
            name="password"
            type="password"
            id={`${id}-password`}
            required
          />
        </FormField>
        <FormField label="Confirm password:" htmlFor={`${id}-confirmPassword`}>
          <input
            name="confirmPassword"
            type="password"
            id={`${id}-confirmPassword`}
            required
          />
        </FormField>
        <fieldset className={styles.controlledFormRow}>
          <legend className={styles.controlledFormSubtitle}>Gender</legend>
          <FormField label="Male" htmlFor={`${id}-male`} horizontal>
            <input
              name="gender"
              type="radio"
              id={`${id}-male`}
              value={'male'}
              required
            />
          </FormField>
          <FormField label="Female" htmlFor={`${id}-female`} horizontal>
            <input
              name="gender"
              type="radio"
              id={`${id}-female`}
              value={'female'}
              required
            />
          </FormField>
          <FormField label="Other" htmlFor={`${id}-other`} horizontal>
            <input
              name="gender"
              type="radio"
              id={`${id}-other`}
              value={'other'}
              required
            />
          </FormField>
        </fieldset>
        <FormField
          label="I accept Terms and Conditions agreement"
          htmlFor={`${id}-t&c`}
          horizontal
        >
          <input name="t&c" type="checkbox" id={`${id}-t&c`} required />
        </FormField>
        <FormField
          label="Select a picture:"
          htmlFor={`${id}-picture`}
          horizontal
        >
          <input name="picture" type="file" id={`${id}-picture`} required />
        </FormField>
        <FormField label="Country:" htmlFor={`${id}-country`}>
          <input name="country" type="text" id={`${id}-country`} required />
        </FormField>
        <button type="submit" className={styles.controlledFormButton}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default ControlledForm;
