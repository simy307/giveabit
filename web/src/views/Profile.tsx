import { Button, CircularProgress, Container } from '@mui/material';

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { logout } = useAuth0();

  return (
    <Container className="mb-5">
      <Button onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          }
        })}>Log out</Button>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <CircularProgress />,
});
