import { useNavigate } from 'react-router-dom';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import { getConfig } from "./config";
import GiveABitRoutes from './GiveABitRoutes.tsx';
import { createTheme, ThemeProvider } from '@mui/material';

const config = getConfig();
const theme = createTheme({
  palette: {
    hack: {
      main: '#4395EB',
      light: '#4395EB',
      dark: '#4395EB',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#fff',
    },
    red: {
      main: '#EF3824'
    }
  } as any,
});

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain,
  clientId: config.clientId,
  cacheLocation: 'localstorage',
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};



const App = () => {
  const navigate = useNavigate();

  providerConfig.onRedirectCallback = (appState) => {
    navigate(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Auth0Provider
        {...providerConfig}
      >
        <GiveABitRoutes />
      </Auth0Provider>
    </ThemeProvider>
  );
};

export default App;
