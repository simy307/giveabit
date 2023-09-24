import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import Header from '../components/Header.tsx';

export const ProfileComponent = () => {

  return (
    <>
      <Header/>
    </>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: LoadingSpinner,
});
