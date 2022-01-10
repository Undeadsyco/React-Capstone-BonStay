import styled from "styled-components";
import { GridContainer, NestedContainer } from "../../GlobalStyles/GlobalStyles";

const HomeContainer = styled(GridContainer)``;
const TextContainer = styled(NestedContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 100px;
  border: 2px solid black;
  line-height: 45px;
`;

const Home = () => (
  <HomeContainer className="multiGrid" height='100%' cols={12} rows={12}>
    <TextContainer colSpan="3/11" rowSpan="4/10">
      <p>
        BonStay always provides you an amazing and pleasent stay with your friends and family at reasonable prices. <br />
        We provide well designed space with modern amenities.<br /> You can reserve a room faster with our efficient BonStay app.
      </p>
    </TextContainer>
  </HomeContainer>
);

export default Home;