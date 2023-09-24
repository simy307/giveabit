import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import {Grid, FormControl, Select, MenuItem} from '@mui/material';
import styled from '@emotion/styled';
import RequestCard from "../components/RequestCard";
import * as react from "react";
import useSWR from "swr";
import axios from "axios";
import heart from '../assets/heart.svg';


const GridContainer = styled(Grid)`
  height: calc(100% - 144px);
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
const HelpThisPerson = styled.div`
  margin-top: 32px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const fetcher = url => axios.get('http://localhost:3001/requests').then(res => res.data)
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const FamilyStories = () => {
  const { data, error, isLoading } = useSWR('/requests', fetcher)
  console.log(data);
  const [selctedIndex, setSelectedIndex] = react.useState(0)
  let selectedItem;
  if(data && data[`list-food`]) {
    selectedItem = data[`list-food`][selctedIndex];
  }
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
            {!isLoading && <>
              {data[`list-food`].map((item, index)=> {
                console.log(index)
                return  <RequestCard
                    onClick={() => setSelectedIndex(index)}
                    isSelected={selctedIndex === index}
                    name={item.name}
                    type={capitalizeFirstLetter(item.type || 'NA')}
                    amount={item.amount}
                    by_date={item.by_date || 'NA'}
                    city={item.city}
                    state={item.state}>
                </RequestCard>
              })}
            </>}
          </Grid>
        </GridItemLeft>
        <GridItemRight item xs={5}>
          {!isLoading &&<>
          <div style={{fontWeight: 700, fontSize: '32px', color: '#4395EB'}}>{selectedItem.name.split(' ')[0]}'s Story</div>
          <div style={{fontWeight: 400, fontSize: '32px', color: '#444444', marginTop: '32px'}}>{selectedItem.name}</div>
          <div style={{fontWeight: 400, fontSize: '18px', color: '#444444'}}>{selectedItem.city}, {selectedItem.state}</div>
          <div style={{ fontSize: '18px', color: '#444444', marginTop: '32px', display: "flex"}}>
            <div style={{fontWeight: 500}}>Needs:&nbsp;</div>
            <div style={{fontWeight: 400}}>${selectedItem.amount}</div>
          </div>
          <div style={{ fontSize: '18px', color: '#444444', display: "flex"}}>
            <div style={{fontWeight: 500}}>By:&nbsp;</div>
            <div style={{fontWeight: 400}}>{selectedItem.by_date || 'NA'}</div>
          </div>
          <div style={{fontWeight: 500, fontSize: '18px', color: '#444444', marginTop: '32px'}}>Our story:</div>
          <div style={{fontWeight: 400, fontSize: '18px', color: '#444444', marginTop: '20px'}}>{selectedItem.description}</div>
            <HelpThisPerson>
              <img src={heart} width={45}/>
              Help this person
            </HelpThisPerson>
          </>}
        </GridItemRight>
      </GridContainer>
  );
};

export default withAuthenticationRequired(FamilyStories, {
  onRedirecting: LoadingSpinner,
});


