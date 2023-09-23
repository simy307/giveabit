import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import backgroundImage from '../assets/penny-jar.svg';
import logo from '../assets/logo.svg';
import HomeCard from '../components/HomeCard.tsx';
import { useCountUp } from 'use-count-up'

const GridContainer = styled(Grid)`
  height: 100vh;
  margin: 0;
`;
const GridItemLeft = styled(Grid)`
  align-items: start;
  margin: 0;
  padding: 0 !important;
  background-color: #5AC4ED;
`;
const GridItemRight = styled(Grid)`
  padding: 40px 0 0 40px !important;
  background-color: rgba(238,218,151, .1);
`;
const PennyImage = styled.img`
  width: 100%;
  min-height: 500px;
`;
const Logo = styled.img`
  position: absolute;
`;
const FloatingContainer = styled.div`
  position: relative;
  background-color: #FFF;
  border: 1px solid #CCC;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 36px;
  top: -78px;
  width: 325px;
  margin-left: 43px;
`;
const FloaterContainerHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

const FloaterContainerBody = styled.div`
  font-size: 16px;
  color: #333;
`;

const LoginSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px !important;
`;

const SignupButton = styled(Button)`
  font-size: 24px;
  margin-bottom: 25px;
`;

const AlreadyAUserText = styled.span`
  padding-right: 20px;
`

const Home = () => {
  const { value: peopleHelped } = useCountUp({
    isCounting: true,
    end: 38561,
    duration: 2,
    easing: 'linear',
    thousandsSeparator: ',',
  });
  const { value: moneyRaised } = useCountUp({
    isCounting: true,
    start: 1619562 / 2,
    end: 1619562,
    duration: 2,
    easing: 'linear',
    thousandsSeparator: ',',
  })
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function LoginSection() {
    return (
      <LoginSectionContainer>
        <SignupButton size="large" variant="outlined" color="hack" onClick={() => loginWithRedirect()}>Sign Up</SignupButton>
        <div>
          <AlreadyAUserText>Already a user?</AlreadyAUserText>
          <Button variant="contained" color="hack" onClick={() => loginWithRedirect()}>Log in</Button>
        </div>
      </LoginSectionContainer>
    );
  }

  return (
    <GridContainer container spacing={2}>
      {isAuthenticated && <Navigate to="profile" />}
      <GridItemLeft item xs={5}>
        <Logo src={logo} alt="Give A Bit" />
        <PennyImage src={backgroundImage} alt="Penny Jar" width="100%" />
        <FloatingContainer>
          <FloaterContainerHeader>Connecting People</FloaterContainerHeader>
          <FloaterContainerBody>We connect people needing a little help with a community of people willing to give it. </FloaterContainerBody>
        </FloatingContainer>
      </GridItemLeft>
      <GridItemRight item xs={7}>
        <HomeCard leftCalloutFontSize="72" leftCalloutPaddingLeft="40" leftCalloutText={peopleHelped} header="People Helped" summary="Need has a face and a story. Your donations help real people get through real challenges. Learn their stories and the impact of your donation."/>
        <HomeCard leftCalloutText={`$${moneyRaised}`} header="Money Raised" summary="Small donations add up to great things. Pool your spare change with others in your community to make a lasting impact."/>
        <HomeCard leftComponent={LoginSection} header="Make a change" summary="Ready to make a difference? You can get signed up and start helping in just a few minutes."/>
      </GridItemRight>
    </GridContainer>
  );
}

export default Home;
