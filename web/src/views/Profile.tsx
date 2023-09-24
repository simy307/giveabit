import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import styled from '@emotion/styled';
import {
  Button, Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl, FormControlLabel, FormGroup,
  Grid, MenuItem, Select,
  Slide, Slider,
} from '@mui/material';
import {makeStyles} from "@mui/styles";
import * as React from "react";
import {TransitionProps} from "@mui/material/transitions";
import axios from "axios";
import useSWR, {useSWRConfig} from "swr";
import bread from '../assets/bread.svg';
import maintenance from '../assets/maintenance.svg';
import heater from '../assets/heater.svg';
import door from '../assets/door.svg';

const GridContainer = styled(Grid)`
  height: calc(100vh - 144px);
  margin: 0;
`;
const GridItemLeft = styled(Grid)`
  background-color: rgba(238,218,151, .1);
  padding-left: 32px;
  padding-top: 40px;
`;
const GridItemRight = styled(Grid)`
  padding-left: 40px;
  padding-top: 40px;
`;
const Header = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #4395EB;
  margin-bottom: 8px;
`;
const HelpingSinceText = styled.div`
  font-size: 18px;
  margin-bottom: 62px;
`;
const AmountHelpedText = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
`;
const CategoryList = styled.ul`
  list-style: none;
  padding-left: 8px;
`;
const CategoryListItem = styled.li`
  display: flex;
  font-size: 18px;
  align-items: center;
  margin-bottom: 42px;
  
  &:last-child { 
    margin-bottom: 0;
  }
`;
const CategoryListItemBullet = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
`;
const CategoryListItemAmount = styled.strong`
  font-size: 32px;
  padding-left: 12px;
  padding-right: 24px;
`;
const OverviewText = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: #4395EB;
`;
const OverviewItemContainer = styled(Grid)`
  font-size: 24px;
  padding-top: 58px;
  padding-bottom: 56px;
  width: calc(100% - 63px) !important;
  border-bottom: 1px solid #ccc;

   &:last-of-type {
     border-bottom: 0;
     padding-bottom: 0;
   }
`;
const OverviewItemSummary = styled(Grid)`
  font-size: 24px;
  font-weight: 600;
`;
const OverviewItemSummaryCentered = styled(OverviewItemSummary)`
  align-self: center;
`;
const OverviewAmountText = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
const OverviewSpreadText = styled(Grid)`
  font-weight: bold;
  align-self: flex-end;
`;
const OverviewButtonCentered = styled(Button)`
  align-self: center;
`;
const OverviewCategoryList = styled.ul`
  margin: 0;
  padding-left: 15px;
`;
const CancelButton = styled(Button)`
  margin-top: 65px;
`;
const AmountModalPaymentTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Transition = React.forwardRef(function Transition(props: TransitionProps & { children: React.ReactElement<any, any>; }, ref: React.Ref<unknown>,) {
  return <Slide direction="up" ref={ref} {...props} /> as any;
});
const useStyles = makeStyles({
  select: {
    '&:before': {
      borderColor: '#4395EB',
    },
    '&:after': {
      borderColor: '#4395EB',
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: '#4395EB',
    },
  },
  icon: {
    fill: '#4395EB',
  },
  root: {
    color: '#4395EB',
  },
})
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const fetcher = url => axios.get('http://localhost:3001/profile/simy307@gmail.com').then(res => res.data)

export const ProfileComponent = () => {
  const [amountIsOpen, setAmountIsOpen] = React.useState(false);
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);
  const { data, error, isLoading , mutate} = useSWR('/profile/simy307@gmail.com', fetcher)
  const [sliderAmountValue, setSliderAmountValue] = React.useState<number>(data?.amount || '-1');
  const [amount, setAmount] = React.useState<number>(data?.amount || '-1');
  const [foodCheck, setFoodChecked] = React.useState<boolean>(false);
  const [utilitiesChecked, setUtilitiesChecked] = React.useState<boolean>(false);
  const [transportationChecked, setTransportationChecked] = React.useState<boolean>(false);
  const [medicalChecked, setMedicalChecked] = React.useState<boolean>(false);
  const [rentChecked, setRentChecked] = React.useState<boolean>(false);
  const [repairsChecked, setRepairsChecked] = React.useState<boolean>(false);
  const { cache } = useSWRConfig();
  React.useEffect(() => {
    if(data) {
      setFoodChecked(data?.subscriptions.indexOf('food') !== -1);
      setUtilitiesChecked(data?.subscriptions.indexOf('utilities') !== -1);
      setTransportationChecked(data?.subscriptions.indexOf('transportation') !== -1);
      setMedicalChecked(data?.subscriptions.indexOf('medical') !== -1);
      setRentChecked(data?.subscriptions.indexOf('rent') !== -1);
      setRepairsChecked(data?.subscriptions.indexOf('repairs') !== -1);
    }
  }, [data])
  console.log(data);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setSliderAmountValue(newValue as number);
  };
  const classes = useStyles()
  const saveAmount = (newAmount) => {
    axios.post('http://localhost:3001/profile/simy307@gmail.com', {amount: newAmount});
    setAmount(newAmount);
    cache.delete('/profile/simy307@gmail.com');
    mutate();
    setAmountIsOpen(false);
  }
  const saveCatagories = async () => {
    await axios.delete('http://localhost:3001/category/simy307@gmail.com', {data: {category: 'food'}});
    await axios.delete('http://localhost:3001/category/simy307@gmail.com', {data: {category: 'utilities'}});
    await axios.delete('http://localhost:3001/category/simy307@gmail.com', {data: {category: 'transportation'}});
    await axios.delete('http://localhost:3001/category/simy307@gmail.com', {data: {category: 'medical'}});
    await axios.delete('http://localhost:3001/category/simy307@gmail.com', {data: {category: 'rent'}});
    await axios.delete('http://localhost:3001/category/simy307@gmail.com', {data: {category: 'repairs'}});
    if(foodCheck) {
      await axios.post('http://localhost:3001/category/simy307@gmail.com', {category: 'food'})
    }
    if(utilitiesChecked) {
      await axios.post('http://localhost:3001/category/simy307@gmail.com', {category: 'utilities'})
    }
    if(transportationChecked) {
      await axios.post('http://localhost:3001/category/simy307@gmail.com', {category: 'transportation'})
    }
    if(medicalChecked) {
      await axios.post('http://localhost:3001/category/simy307@gmail.com', {category: 'medical'})
    }
    if(rentChecked) {
      await axios.post('http://localhost:3001/category/simy307@gmail.com', {category: 'rent'})
    }
    if(repairsChecked) {
      await axios.post('http://localhost:3001/category/simy307@gmail.com', {category: 'repairs'})
    }
    cache.delete('/profile/simy307@gmail.com');
    mutate();
    setCategoriesOpen(false);
  }
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <GridContainer container>
      <GridItemLeft item xs={5}>
        <Header>Welcome back, John.</Header>
        <HelpingSinceText>Helping since 4-12-22.</HelpingSinceText>
        <AmountHelpedText>You have helped <strong>740</strong> families.</AmountHelpedText>
        <CategoryList>
          <CategoryListItem>
            <CategoryListItemBullet src={bread}/>
            <CategoryListItemAmount>512</CategoryListItemAmount>
            <div>Put food on their table</div>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemBullet src={maintenance}/>
            <CategoryListItemAmount>23</CategoryListItemAmount>
            <div>Repair their vehicle</div>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemBullet src={heater}/>
            <CategoryListItemAmount>121</CategoryListItemAmount>
            <div>Ensure their kids stay warm</div>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemBullet src={door}/>
            <CategoryListItemAmount>32</CategoryListItemAmount>
            <div>Keep a roof over their heads</div>
          </CategoryListItem>
        </CategoryList>
      </GridItemLeft>
      <GridItemRight item xs={7}>
        <OverviewText>Your giving overview:</OverviewText>
        <OverviewItemContainer container>
          <OverviewItemSummaryCentered item xs={4}>You are giving:</OverviewItemSummaryCentered>
          <OverviewSpreadText item xs={5}>
            {!isLoading && <><OverviewAmountText>{USDollar.format(amount == -1 ? data?.amount : amount)}</OverviewAmountText> a month</>}
          </OverviewSpreadText>
          <Grid item xs={3} onClick={() => setAmountIsOpen(true)}>
            <OverviewButtonCentered color="hack">Edit Amount</OverviewButtonCentered>
          </Grid>
        </OverviewItemContainer>
        <OverviewItemContainer container>
          <OverviewItemSummary item xs={4}>Providing for:</OverviewItemSummary>
          <Grid item xs={5}>
            <OverviewCategoryList>
              {data?.subscriptions.map((item) => {
                return <li>{capitalizeFirstLetter(item)}</li>
              })}
            </OverviewCategoryList>
          </Grid>
          <Grid item xs={3} onClick={() => setCategoriesOpen(true)}>
            <Button color="hack">Edit Categories</Button>
          </Grid>
        </OverviewItemContainer>
        <OverviewItemContainer container>
          <OverviewItemSummary item xs={4}>Paid with:</OverviewItemSummary>
          <Grid item xs={5}>Card **8250</Grid>
          <Grid item xs={3}>
            <Button color="hack">Edit Payment</Button>
          </Grid>
        </OverviewItemContainer>
        <CancelButton color="red">Cancel Account</CancelButton>
      </GridItemRight>
      {!isLoading && <Dialog
          open={amountIsOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setAmountIsOpen(false)}
          aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Amount"}</DialogTitle>
        <DialogContent style={{width: '550px', height: '150px'}}>
           <AmountModalPaymentTypeContainer>
             <div style={{fontSize: '18px', padding: '0 20px 0 5px'}}>Payment Type</div>
             <div style={{paddingRight: '20px'}}>
               <FormControl fullWidth style={{borderColor: '#4395EB'}}>
                 <Select
                     inputProps={{
                       classes: {
                         icon: classes.icon,
                         root: classes.root,
                       },
                     }}
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     defaultValue={'round_up'}
                     style={{color: '#4395EB', width: '175px', height: '35px', marginLeft: '10px', borderColor: '#4395EB'}}
                 >
                   <MenuItem value={'round_up'}>Round Up</MenuItem>
                   <MenuItem value={'lump_sum'}>Lump Sum</MenuItem>
                 </Select>
               </FormControl>
             </div>
             <div style={{fontSize: '14px', color: '#666666', width: '181px'}}>Payments are distributed once a month.</div>
           </AmountModalPaymentTypeContainer>
          <div style={{marginTop: '50px', marginLeft: '40px', display: 'flex'}}>
            <Slider style={{width: '230px'}} aria-label="Volume" max={25} min={1} defaultValue={data?.amount} value={sliderAmountValue != -1 ? sliderAmountValue : data?.amount} onChange={handleChange} />
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{fontWeight: 600, fontSize: '24px', color: '#333333', marginLeft: '20px'}}>{USDollar.format(sliderAmountValue != -1 ? sliderAmountValue : data?.amount)}</div>
              <div style={{fontWeight: 400, fontSize: '16px', color: '#333333', marginLeft: '7px'}}>maximum a month</div>
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{marginRight: '25px', marginBottom: '25px'}}>
          <Button variant="outlined" color="hack" onClick={() => {setAmountIsOpen(false); setSliderAmountValue(amount);}}>Cancel</Button>
          <Button variant="contained" color="hack" onClick={() => saveAmount(sliderAmountValue)}>Save Changes</Button>
        </DialogActions>
      </Dialog>}
      {!isLoading && <Dialog
          open={categoriesOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setCategoriesOpen(false)}
          aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Categories"}</DialogTitle>
        <DialogContent style={{width: '550px', height: '170px'}}>
          <div style={{fontWeight: 400, fontSize: '18px', padding: '0 20px 0 0px'}}>Choose where you wish to help.</div>
          <div style={{fontWeight: 400, fontSize: '14px', padding: '0 20px 0 0px'}}>Your donation is split evenly across selected categories.</div>
          <FormGroup style={{marginTop: '25px'}}>
            <div style={{display: "flex"}}>
            <FormControlLabel style={{width: '150px'}} control={<Checkbox onChange={(event) => setFoodChecked(event.target.checked)} checked={foodCheck}/>} label="Food" />
            <FormControlLabel style={{width: '150px'}} control={<Checkbox onChange={(event) => setUtilitiesChecked(event.target.checked)} checked={utilitiesChecked} />} label="Utilities" />
            <FormControlLabel style={{width: '150px'}} control={<Checkbox onChange={(event) => setMedicalChecked(event.target.checked)} checked={medicalChecked} />} label="Medical" />
            </div>
            <div style={{display: "flex"}}>
            <FormControlLabel style={{width: '150px'}} control={<Checkbox onChange={(event) => setRentChecked(event.target.checked)} checked={rentChecked} />} label="Rent" />
            <FormControlLabel style={{width: '150px'}} control={<Checkbox onChange={(event) => setRepairsChecked(event.target.checked)} checked={repairsChecked} />} label="Repairs" />
            <FormControlLabel style={{width: '150px'}} control={<Checkbox onChange={(event) => setTransportationChecked(event.target.checked)} checked={transportationChecked} />} label="Transportation" />
            </div>
          </FormGroup>
        </DialogContent>
        <DialogActions style={{marginRight: '25px', marginBottom: '25px'}}>
          <Button variant="outlined" color="hack" onClick={() => {setCategoriesOpen(false);}}>Cancel</Button>
          <Button variant="contained" color="hack" onClick={() => saveCatagories()}>Save Changes</Button>
        </DialogActions>
      </Dialog>}
    </GridContainer>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: LoadingSpinner,
});
