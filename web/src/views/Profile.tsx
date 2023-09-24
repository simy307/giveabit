import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from '../components/LoadingSpinner.tsx';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const GridContainer = styled(Grid)`
  height: calc(100vh - 144px);
  margin: 0;
`;
const GridItemLeft = styled(Grid)`
  background-color: rgba(238,218,151, .1);
  padding-left: 32px;
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
      <Grid item xs={7}></Grid>
    </GridContainer>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: LoadingSpinner,
});
