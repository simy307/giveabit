import infographic from '../assets/infographic.svg';
import styled from "@emotion/styled";

const Image = styled.img`
`;
const Container = styled.div`
  width: calc(100% - 350px);
  height: calc(100% - 244px);
  padding: 50px 0px 50px 50px;
`;
export const HowItWorks = () => {
  return (
    <Container>
      <Image src={infographic} alt="infographic" width="100%" />
    </Container>
  );
};

export default HowItWorks;
