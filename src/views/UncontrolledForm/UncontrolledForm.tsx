import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CountriesDatalist,
  ErrorMessage,
  FormField,
  PasswordStrength,
} from '@/components';

import { useAppDispatch } from '@/hooks';

import {
  FormErrors,
  UncontrolledFormData,
  formDataToFormEntry,
  validateForm,
} from '@/utils';
import { addUncontrolledFormEntry } from '@store/formsEntries/formsEntriesSlice';

import styles from '@/styles/Form.module.css';

const UncontrolledForm = () => {
  const id = useId();
  const [errors, setErrors] = useState<FormErrors>({
    username: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    't&c': '',
    picture: '',
    gender: '',
  });
  const [password, setPassword] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newPassword = passwordRef.current?.value;

      if (password !== newPassword && newPassword) {
        setPassword(newPassword);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [password]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const { errors, isValid } = await validateForm(formData);

      if (isValid) {
        const formDataObject = Object.fromEntries(
          formData.entries(),
        ) as unknown as UncontrolledFormData;
        const formEntry = await formDataToFormEntry(formDataObject);

        dispatch(addUncontrolledFormEntry(formEntry));
        navigate('/');
      } else {
        setErrors(errors);
      }
    }
  };

  return (
    <main className={`container ${styles.form}`}>
      <h1 className={styles.title}>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit} className={styles.content}>
        <FormField
          label="Username:"
          htmlFor={`${id}-username`}
          errorMessage={errors.username}
        >
          <input
            name="username"
            type="text"
            id={`${id}-username`}
            className={styles.textField}
          />
        </FormField>
        <FormField label="Age:" htmlFor={`${id}-age`} errorMessage={errors.age}>
          <input
            name="age"
            type="number"
            id={`${id}-age`}
            className={styles.textField}
          />
        </FormField>
        <FormField
          label="Email:"
          htmlFor={`${id}-email`}
          errorMessage={errors.email}
        >
          <input
            name="email"
            type="text"
            id={`${id}-email`}
            className={styles.textField}
          />
        </FormField>
        <FormField
          label="Password:"
          htmlFor={`${id}-password`}
          errorMessage={errors.password}
        >
          <input
            name="password"
            type="password"
            id={`${id}-password`}
            ref={passwordRef}
            className={styles.textField}
          />
          <PasswordStrength password={password} />
        </FormField>
        <FormField
          label="Confirm password:"
          htmlFor={`${id}-confirmPassword`}
          errorMessage={errors.confirmPassword}
        >
          <input
            name="confirmPassword"
            type="password"
            id={`${id}-confirmPassword`}
            className={styles.textField}
          />
        </FormField>
        <fieldset className={styles.row}>
          <legend className={styles.subtitle}>Gender</legend>
          <FormField label="Male" htmlFor={`${id}-male`} horizontal noError>
            <input
              name="gender"
              type="radio"
              id={`${id}-male`}
              value={'male'}
            />
          </FormField>
          <FormField label="Female" htmlFor={`${id}-female`} horizontal noError>
            <input
              name="gender"
              type="radio"
              id={`${id}-female`}
              value={'female'}
            />
          </FormField>
          <FormField label="Other" htmlFor={`${id}-other`} horizontal noError>
            <input
              name="gender"
              type="radio"
              id={`${id}-other`}
              value={'other'}
            />
          </FormField>
        </fieldset>
        <ErrorMessage message={errors.gender} />
        <FormField
          label="I accept Terms and Conditions agreement"
          htmlFor={`${id}-t&c`}
          horizontal
          errorMessage={errors['t&c']}
        >
          <input
            name="t&c"
            type="checkbox"
            id={`${id}-t&c`}
            className={styles.checkbox}
          />
        </FormField>
        <FormField
          label="Select a picture:"
          htmlFor={`${id}-picture`}
          horizontal
          errorMessage={errors.picture}
        >
          <input name="picture" type="file" id={`${id}-picture`} />
        </FormField>
        <FormField
          label="Country:"
          htmlFor={`${id}-country`}
          errorMessage={errors.country}
        >
          <input
            name="country"
            type="text"
            id={`${id}-country`}
            list={`${id}-countries`}
            className={styles.textField}
          />
          <CountriesDatalist id={`${id}-countries`} />
        </FormField>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default UncontrolledForm;
