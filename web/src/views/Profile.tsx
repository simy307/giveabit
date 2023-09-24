import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

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
const CategoryListItemBullet = styled.div`
  height: 30px;
  width: 30px;
  background-color: #D9D9D9;
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

export const ProfileComponent = () => {

  return (
    <GridContainer container>
      <GridItemLeft item xs={5}>
        <Header>Welcome back, John.</Header>
        <HelpingSinceText>Helping since 4-12-22.</HelpingSinceText>
        <AmountHelpedText>You have helped <strong>740</strong> families.</AmountHelpedText>
        <CategoryList>
          <CategoryListItem>
            <CategoryListItemBullet/>
            <CategoryListItemAmount>512</CategoryListItemAmount>
            <div>Put food on their table</div>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemBullet/>
            <CategoryListItemAmount>23</CategoryListItemAmount>
            <div>Repair their vehicle</div>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemBullet/>
            <CategoryListItemAmount>121</CategoryListItemAmount>
            <div>Ensure their kids stay warm</div>
          </CategoryListItem>
          <CategoryListItem>
            <CategoryListItemBullet/>
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
            <OverviewAmountText>$15.00</OverviewAmountText> a month
          </OverviewSpreadText>
          <Grid item xs={3}>
            <OverviewButtonCentered color="hack">Edit Amount</OverviewButtonCentered>
          </Grid>
        </OverviewItemContainer>
        <OverviewItemContainer container>
          <OverviewItemSummary item xs={4}>Providing for:</OverviewItemSummary>
          <Grid item xs={5}>
            <OverviewCategoryList>
              <li>Food</li>
              <li>Rent</li>
              <li>Transportation</li>
            </OverviewCategoryList>
          </Grid>
          <Grid item xs={3}>
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

    </GridContainer>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: LoadingSpinner,
});
