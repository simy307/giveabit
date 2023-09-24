import {Card, Grid} from '@mui/material';
import styled from '@emotion/styled';


type RequestCardProps = {
  name: string,
  city: string,
  state: string,
  amount: number,
  by_date: string,
  type: string
  isSelected: boolean;
  onClick: Function;
}

const CardItem = styled(Card)`
  align-items: start;
  font-size: 16px;
  height: 25px;
  display: flex;
  padding: 15px 25px;
  border: ${props => (props.isSelected ? '2px solid #4395EB;' : 'none')};
`;


export default function RequestCard(props: RequestCardProps) {
   const {name, city, state, amount, by_date, type, isSelected, onClick} = props;
  return <Grid item xs={12} onClick={onClick}>
    <CardItem elevation={3} isSelected={isSelected}>
      <div style={{width: `100px`}}>{name}</div>
      <div style={{width: `200px`}}>{city}, {state}</div>
      <div style={{width: `150px`}}>Needs: ${amount}</div>
      <div style={{width: `200px`}}>By: {by_date}</div>
      <div style={{flex: '1', textAlign: 'right'}}>{type}</div>
    </CardItem>
  </Grid>;
}
