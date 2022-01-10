import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles/GlobalStyles";

export const BookingContainer = styled(GridContainer)`
  padding: 20px 200px;
  gap: 10px;
`;

export const ItemContainer = styled.div`
  font-size: 0.9rem;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  height: 66%;
  padding-top: 5px;
`;

export const Info = styled.div`
  text-align: center;
  height: 17%;

  & > h4 {
    margin: 0;
  }
`;

export const BtnBox = styled.div`
  height: 34%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;

  & > button {
    width: 100%;
    height: 40%;
  }

  & > button:hover {

  }
`;