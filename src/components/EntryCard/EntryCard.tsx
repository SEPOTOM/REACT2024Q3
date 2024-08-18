import { EntryCardProps } from '@components/EntryCard/types';

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
    <div>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm password: {confirmPassword}</p>
      <p>Gender: {gender}</p>
      <p>Is T&C accepted: {isTermsAccepted ? 'Yes' : 'No'}</p>
      <p>Country: {country}</p>
      <p>
        Uploaded image: <img src={picture} alt="Uploaded image" />
      </p>
    </div>
  );
};

export default EntryCard;
