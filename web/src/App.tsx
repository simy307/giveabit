import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from "@mui/material";

import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { Auth0Provider, Auth0ProviderOptions, useAuth0 } from '@auth0/auth0-react';

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import { getConfig } from "./config";
initFontAwesome();

const config = getConfig();

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain,
  clientId: config.clientId,
  cacheLocation: 'localstorage',
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

const GiveABitRoutes = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <Container className="flex-grow-1 mt-5">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

const App = () => {
  const navigate = useNavigate();

  providerConfig.onRedirectCallback = (appState) => {
    navigate(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  }

  return (
    <Auth0Provider
      {...providerConfig}
    >
      <GiveABitRoutes />
    </Auth0Provider>
  );
};

export default App;
