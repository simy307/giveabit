import logo from '../assets/logo.svg';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Tab, Tabs } from '@mui/material';

const HeaderContainer = styled.div`
  background-color: #5AC4ED;
  display: flex;
  height: 144px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TabsNavigation = styled(Tabs)`
  align-self: flex-end;
  padding-bottom: 15px;
  padding-left: 80px;
`;
const LogoutButton = styled(Button)`
  align-self: flex-end;
  position: absolute;
  right: 32px;
  margin-bottom: 22px;
`;

export default function Header() {
  const { logout } = useAuth0();

  return (
    <HeaderContainer>
      <img src={logo} alt="Give A Bit" />
      <TabsNavigation
        value={"profile"}
        onChange={() => null}
        textColor="secondary"
        indicatorColor="secondary"
        color="secondary"
      >
        <Tab value="profile" label="Profile" />
        <Tab value="family-stories" label="Family Stories" />
        <Tab value="how-it-works" label="How It Works" />
      </TabsNavigation>
      <LogoutButton color="secondary" onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          }
        })}>Log out</LogoutButton>
    </HeaderContainer>
  );
}
