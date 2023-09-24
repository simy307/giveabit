import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';

export const ProfileComponent = () => {

  return (
    <>
    </>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: LoadingSpinner,
});
