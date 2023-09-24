import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type HomeCardProps = {
  leftComponent?: () => ReactNode;
  leftCalloutFontSize?: string;
  leftCalloutPaddingLeft?: string;
  leftCalloutText?: string;
  header: string;
  headerIcon: any;
  summary: string;
}

const GridContainer = styled(Grid)`
  margin-bottom: 32px;
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
  display: flex;
  align-items: center;
  
  > img {
    margin-right: 11px;
  }
`;

const LeftCallOutBoxBase = styled(Grid)`
  max-width: 312px !important;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


export default function HomeCard(props: HomeCardProps) {
  const LeftCallOutBox = styled(LeftCallOutBoxBase)`
    font-size: ${props.leftCalloutFontSize ?? '48'}px;
    font-weight: bold;
    background-color: #4FACEC;
    padding: 57px ${props.leftCalloutPaddingLeft ?? 30}px !important;
    margin: 0;
    color: #FFF;
  `;

  return (
    <GridContainer container>
      {props.leftComponent ? (
        <LeftCallOutBoxBase item xs={5}>
          {props.leftComponent()}
        </LeftCallOutBoxBase>
      ) : (
        <LeftCallOutBox item xs={5}>
          {props.leftCalloutText}
        </LeftCallOutBox>
      )}
      <HomeCardContextBox item xs={6}>
        <div>
          <HomeCardHeader>
            <img src={props.headerIcon} height={24} width={24} />
            {props.header}
          </HomeCardHeader>
          <div>{props.summary}</div>
        </div>
      </HomeCardContextBox>
    </GridContainer>
  );
}
