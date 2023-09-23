import { useAuth0 } from '@auth0/auth0-react';
import { CircularProgress } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home.tsx';
import Profile from './views/Profile.tsx';

export default function GiveABitRoutes () {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
}
