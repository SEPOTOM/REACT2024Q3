import { useId } from 'react';

import { FormField } from '@/components';

const ControlledForm = () => {
  const id = useId();

  return (
    <main>
      <h1>Controlled Form</h1>
      <form>
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
        <fieldset>
          <legend>Gender</legend>
          <FormField label="Male" htmlFor={`${id}-male`}>
            <input
              type="radio"
              name="gender"
              id={`${id}-male`}
              value={'male'}
              required
            />
          </FormField>
          <FormField label="Female" htmlFor={`${id}-female`}>
            <input
              type="radio"
              name="gender"
              id={`${id}-female`}
              value={'female'}
              required
            />
          </FormField>
          <FormField label="Other" htmlFor={`${id}-other`}>
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
        >
          <input type="checkbox" name="t&c" id={`${id}-t&c`} required />
        </FormField>
        <FormField label="Select a picture:" htmlFor={`${id}-picture`}>
          <input type="file" name="picture" id={`${id}-picture`} required />
        </FormField>
        <FormField label="Country:" htmlFor={`${id}-country`}>
          <input type="text" name="country" id={`${id}-country`} required />
        </FormField>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default ControlledForm;
