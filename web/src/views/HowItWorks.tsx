import infographic from '../assets/infographic.svg';
import styled from "@emotion/styled";

const Image = styled.img`
`;
const Container = styled.div`
  height: calc(100% - 244px);
  padding: 50px 240px 50px 50px;
  background-color: rgba(238,218,151, .1);
`;
export const HowItWorks = () => {
  return (
    <Container>
      <Image src={infographic} alt="infographic" width="100%" />
    </Container>
  );
};

export default HowItWorks;
