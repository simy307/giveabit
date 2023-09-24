import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {Button, Grid, FormControl, Item, Select, MenuItem, Card} from '@mui/material';
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
  background-color: #fff;
`;
const TopContainer = styled(Grid)`
  align-items: center;
  justify-content: space-between;
  vertical-align: center;
  height: 50px;
  display: flex;
  margin-top: 20px;
  padding: 0 50px 0 35px !important;
  background-color: #fff;
`;
const TopContainer2 = styled(Grid)`
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  height: 50px;
  display: flex;
  margin-top: 20px;
  padding: 0 50px 0 35px !important;
  background-color: #fff;
`;
const GridItemRight = styled(Grid)`
  padding: 48px !important;
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
  box-shadow: 8px 8px 8px rgba(0,0,0, .25);
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

export const FamilyStories = () => {
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

  return (
      <GridContainer container spacing={2}>
        <GridItemLeft item xs={7}>
          <TopContainer>
            <div style={{display: "flex", flexDirection: 'row'}}>
              <div style={{fontSize: '24px', width: '169px'}}>Pick a category.</div>
            <div >
            <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={'food'}
                style={{width: '175px', height: '35px', marginLeft: '10px'}}
            >
              <MenuItem value={'food'}>Food</MenuItem>
              <MenuItem value={'medical'}>Medical</MenuItem>
              <MenuItem value={'rent'}>Rent</MenuItem>
              <MenuItem value={'repair'}>Repair</MenuItem>
              <MenuItem value={'transportation'}>Transportation</MenuItem>
              <MenuItem value={'utility'}>Utility</MenuItem>
            </Select>
          </FormControl>
            </div></div>
            <div style={{color: '#4395EB', fontSize: '16px', cursor: 'pointer'}}>Edit my contribution categories</div>
          </TopContainer>
          <TopContainer2>
            <div style={{fontSize: '18px'}}>42 people need help with rent. </div>
            <div style={{fontSize: '14px', width: '169px', color: '#666666'}}>Read their stories.</div>
          </TopContainer2>
          <Grid container spacing={4} marginTop={'8px'} paddingLeft={'35px'} paddingRight={'50px'}>

            <Grid item xs={12}>
              <Card style={{border: "2px solid #4395EB", alignItems: 'center', fontSize: '16px', height: '25px', display: 'flex', justifyContent: "space-between", padding: '15px 25px'}} elevation={3}>
                <div>Jill B.</div>
                <div>Austin, TX</div>
                <div>Needs: $230</div>
                <div>By: 10/31/23</div>
                <div style={{paddingLeft: '150px'}}>Rent</div>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{alignItems: 'center', fontSize: '16px', height: '25px', display: 'flex', justifyContent: "space-between", padding: '15px 25px'}} elevation={3}>
                <div>Jill B.</div>
                <div>Austin, TX</div>
                <div>Needs: $230</div>
                <div>By: 10/31/23</div>
                <div style={{paddingLeft: '150px'}}>Rent</div>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{alignItems: 'center', fontSize: '16px', height: '25px', display: 'flex', justifyContent: "space-between", padding: '15px 25px'}} elevation={3}>
                <div>Jill B.</div>
                <div>Austin, TX</div>
                <div>Needs: $230</div>
                <div>By: 10/31/23</div>
                <div style={{paddingLeft: '150px'}}>Rent</div>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{alignItems: 'center', fontSize: '16px', height: '25px', display: 'flex', justifyContent: "space-between", padding: '15px 25px'}} elevation={3}>
                <div>Jill B.</div>
                <div>Austin, TX</div>
                <div>Needs: $230</div>
                <div>By: 10/31/23</div>
                <div style={{paddingLeft: '150px'}}>Rent</div>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{alignItems: 'center', fontSize: '16px', height: '25px', display: 'flex', justifyContent: "space-between", padding: '15px 25px'}} elevation={3}>
                <div>Jill B.</div>
                <div>Austin, TX</div>
                <div>Needs: $230</div>
                <div>By: 10/31/23</div>
                <div style={{paddingLeft: '150px'}}>Rent</div>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{alignItems: 'center', fontSize: '16px', height: '25px', display: 'flex', justifyContent: "space-between", padding: '15px 25px'}} elevation={3}>
                <div>Jill B.</div>
                <div>Austin, TX</div>
                <div>Needs: $230</div>
                <div>By: 10/31/23</div>
                <div style={{paddingLeft: '150px'}}>Rent</div>
              </Card>
            </Grid>

          </Grid>
        </GridItemLeft>
        <GridItemRight item xs={5}>
          <div style={{fontWeight: 700, fontSize: '32px', color: '#4395EB'}}>Jill’s Story</div>
          <div style={{fontWeight: 400, fontSize: '32px', color: '#444444', marginTop: '32px'}}>Jill B.</div>
          <div style={{fontWeight: 400, fontSize: '18px', color: '#444444'}}>Austin, TX</div>
          <div style={{ fontSize: '18px', color: '#444444', marginTop: '32px', display: "flex"}}>
            <div style={{fontWeight: 500}}>Needs:&nbsp;</div>
            <div style={{fontWeight: 400}}>$230.0</div>
          </div>
          <div style={{ fontSize: '18px', color: '#444444', display: "flex"}}>
            <div style={{fontWeight: 500}}>By:&nbsp;</div>
            <div style={{fontWeight: 400}}>10/31/23</div>
          </div>
          <div style={{fontWeight: 500, fontSize: '18px', color: '#444444', marginTop: '32px'}}>Our story:</div>
          <div style={{fontWeight: 400, fontSize: '18px', color: '#444444', marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius purus vitae velit consequat posuere. In finibus, orci sit amet maximus eleifend, ligula libero ullamcorper erat, sed semper ex nibh sit amet massa. Maecenas facilisis odio vitae elit malesuada iaculis. Fusce tellus libero, porta ut bibendum vel</div>
        </GridItemRight>
      </GridContainer>
  );
};

export default withAuthenticationRequired(FamilyStories, {
  onRedirecting: LoadingSpinner,
});


