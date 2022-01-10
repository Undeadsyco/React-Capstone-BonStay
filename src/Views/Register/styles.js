import { Link } from "react-router-dom";
import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles/GlobalStyles";

export const RegisterContainer = styled(GridContainer)``;
export const Form = styled.form`
  border: 2px solid black;
  border-radius: 20px;
  grid-column: 7/10;
  grid-row: 2/12;
  padding: 10px;
`;

export const InputContainer = styled.div`
  height: 15%;
  margin-top: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 45%;
`;

export const BtnBox = styled.div`
  height: 10%;
  margin-top: 10px;
`;

export const RegBtn = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ErrContainer = styled.div`
  text-align: right;
  font-size: 0.7rem;
  font-weight: 400;
  color: red;
`;

export const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`;
