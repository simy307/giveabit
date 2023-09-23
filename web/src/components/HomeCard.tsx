import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type HomeCardProps = {
  leftComponent?: () => ReactNode;
  leftCalloutFontSize?: string;
  leftCalloutPaddingLeft?: string;
  leftCalloutText?: string;
  header: string;
  summary: string;
}

const GridContainer = styled(Grid)`
  margin-bottom: 32px;
`;

const LeftCallOutBox = styled(Grid)`
  font-size: 48px;
  font-weight: bold;
  background-color: #4FACEC;
  padding: 57px 25px !important;
  margin: 0;
  color: #FFF;
  align-items: center;
  justify-content: center;
`;

const HomeCardContextBox = styled(Grid)`
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeCardHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4395EB;
  margin-bottom: 12px;
`;

export default function HomeCard(props: HomeCardProps) {

  const LeftCallOutBox = styled(Grid)`
    font-size: ${props.leftCalloutFontSize ?? '48'}px;
    font-weight: bold;
    background-color: #4FACEC;
    padding: 57px ${props.leftCalloutPaddingLeft ?? 30}px !important;
    margin: 0;
    color: #FFF;
    align-items: center;
    justify-content: center;
  `;

  return (
    <GridContainer container>
      {props.leftComponent ? (
        <Grid item xs={5}>
          {props.leftComponent()}
        </Grid>
      ) : (
        <LeftCallOutBox item xs={5}>
          {props.leftCalloutText}
        </LeftCallOutBox>
      )}
      <HomeCardContextBox item xs={6}>
        <div>
          <HomeCardHeader>{props.header}</HomeCardHeader>
          <div>{props.summary}</div>
        </div>
      </HomeCardContextBox>
    </GridContainer>
  );
}
