import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home.tsx';
import Profile from './views/Profile.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import { FamilyStories } from './views/FamilyStories.tsx';
import HowItWorks from './views/HowItWorks.tsx';
import Header from './components/Header.tsx';

export default function GiveABitRoutes() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {isAuthenticated && <Header/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/family-stories" element={<FamilyStories/>} />
        <Route path="/how-it-works" element={<HowItWorks/>} />
      </Routes>
    </>
  );
}
