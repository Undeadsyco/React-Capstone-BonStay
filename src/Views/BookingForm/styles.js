import styled from 'styled-components';
import { Container } from '../../GlobalStyles/GlobalStyles';

export const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 25%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(7, 1fr);
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const ErrContainer = styled.div`
  font-size: 0.75rem;
  color: crimson;
`;

export const Input = styled.input`
  height: 45%;
  width: 100%;
`;

export const Select = styled.select`
  height: 45%;
  width: 100%;
`;