import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingSpinner() {
  return (
    <LoadingContainer>
      <CircularProgress color="hack"/>
    </LoadingContainer>
  )
}
