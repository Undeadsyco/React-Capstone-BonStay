import { Link } from "react-router-dom";
import styled from "styled-components";
import { GridContainer, NestedContainer } from "../../GlobalStyles/GlobalStyles";

export const LoginContainer = styled(GridContainer)``;

export const Form = styled.form`
  grid-column: 5/9;
  grid-row: 3/11;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
`;

export const InputContainer = styled(NestedContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 70px;
  font-size: 1.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 40%;
`;

export const BtnBox = styled.div`
  margin: 10px 0;
  height: 30px;
`;

export const Btn = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;