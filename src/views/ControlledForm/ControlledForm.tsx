import { useId } from 'react';

import { FormField } from '@/components';

import styles from '@views/ControlledForm/ControlledForm.module.css';

const ControlledForm = () => {
  const id = useId();

  return (
    <main className={`container ${styles.controlledForm}`}>
      <h1 className={styles.controlledFormTitle}>Controlled Form</h1>
      <form className={styles.controlledFormContent}>
        <FormField label="Username:" htmlFor={`${id}-username`}>
          <input type="text" name="username" id={`${id}-username`} required />
        </FormField>
        <FormField label="Age:" htmlFor={`${id}-age`}>
          <input type="number" name="age" id={`${id}-age`} required />
        </FormField>
        <FormField label="Email:" htmlFor={`${id}-email`}>
          <input type="email" name="email" id={`${id}-email`} required />
        </FormField>
        <FormField label="Password:" htmlFor={`${id}-password`}>
          <input
            type="password"
            name="password"
            id={`${id}-password`}
            required
          />
        </FormField>
        <FormField label="Confirm password:" htmlFor={`${id}-confirmPassword`}>
          <input
            type="password"
            name="confirmPassword"
            id={`${id}-confirmPassword`}
            required
          />
        </FormField>
        <fieldset className={styles.controlledFormRow}>
          <legend className={styles.controlledFormSubtitle}>Gender</legend>
          <FormField label="Male" htmlFor={`${id}-male`} horizontal>
            <input
              type="radio"
              name="gender"
              id={`${id}-male`}
              value={'male'}
              required
            />
          </FormField>
          <FormField label="Female" htmlFor={`${id}-female`} horizontal>
            <input
              type="radio"
              name="gender"
              id={`${id}-female`}
              value={'female'}
              required
            />
          </FormField>
          <FormField label="Other" htmlFor={`${id}-other`} horizontal>
            <input
              type="radio"
              name="gender"
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
          <input type="checkbox" name="t&c" id={`${id}-t&c`} required />
        </FormField>
        <FormField
          label="Select a picture:"
          htmlFor={`${id}-picture`}
          horizontal
        >
          <input type="file" name="picture" id={`${id}-picture`} required />
        </FormField>
        <FormField label="Country:" htmlFor={`${id}-country`}>
          <input type="text" name="country" id={`${id}-country`} required />
        </FormField>
        <button type="submit" className={styles.controlledFormButton}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default ControlledForm;
