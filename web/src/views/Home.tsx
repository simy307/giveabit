import Hero from "../components/Hero";
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated);

  return (
    <>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
      {isAuthenticated && <Navigate to="profile" />}
      <Hero />
      <hr />
    </>
  );
}

export default Home;
