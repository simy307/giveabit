import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';

export const FamilyStories = () => {
  return (
    <>
    </>
  );
};

export default withAuthenticationRequired(FamilyStories, {
  onRedirecting: LoadingSpinner,
});
