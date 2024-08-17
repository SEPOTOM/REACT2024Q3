import { PasswordStrengthProps } from '@components/PasswordStrength/types';

import { Regexps } from '@/consts';

import styles from '@components/PasswordStrength/PasswordStrength.module.css';

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  let score = 0;
  let strength = 'Weak';

  if (Regexps.NUMBER.test(password)) score += 1;
  if (Regexps.LOWERCASE.test(password)) score += 1;
  if (Regexps.UPPERCASE.test(password)) score += 1;
  if (Regexps.SPECIAL_SYMBOLS.test(password)) score += 1;

  if (score > 2) strength = 'Normal';
  if (score > 3) strength = 'Strong';

  return (
    <p className={styles.passwordStrength}>
      Your password is{' '}
      <span
        className={`${styles.passwordStrengthLabel} ${styles[`passwordStrengthLabel${strength}`]}`}
      >
        {strength}
      </span>
    </p>
  );
};

export default PasswordStrength;
