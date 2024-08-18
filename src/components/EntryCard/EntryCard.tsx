import { EntryCardProps } from '@components/EntryCard/types';

import styles from '@components/EntryCard/EntryCard.module.css';

const EntryCard = ({ entry }: EntryCardProps) => {
  const {
    username,
    age,
    email,
    password,
    confirmPassword,
    gender,
    't&c': isTermsAccepted,
    country,
    picture,
  } = entry;

  return (
    <div className={styles.card}>
      <div className={styles.cardColumn}>
        <p className={styles.text}>
          <span className={styles.label}>Username:</span> {username}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Age:</span> {age}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Email:</span> {email}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Password:</span> {password}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Confirm password:</span>{' '}
          {confirmPassword}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Gender:</span> {gender}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Is T&C accepted:</span>{' '}
          {isTermsAccepted ? 'Yes' : 'No'}
        </p>
        <p className={styles.text}>
          <span className={styles.label}>Country:</span> {country}
        </p>
      </div>
      <p className={`${styles.cardColumn} ${styles.text}`}>
        <span className={styles.label}>Uploaded image:</span>{' '}
        <div className={styles.picture}>
          <img src={picture} alt="Uploaded image" className={styles.image} />
        </div>
      </p>
    </div>
  );
};

export default EntryCard;
