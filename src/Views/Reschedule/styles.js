import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const RescheduleContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Form = styled.form`
  margin-top: 30px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  width: 25%;
  height: 60%;

  & > h2 {
    text-align: center;
    height: 25%;
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 30%;

  & > input {
    height: 45%;
    width: 100%;
  }

  & > div {
    font-size: 0.75rem;
    color: red;
  }
`;

export const BtnBox = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    width: 100%;
    height: 80%;
    border-radius: 10px;
  }
`;