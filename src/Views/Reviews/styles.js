import styled from 'styled-components';
import { Container } from '../../GlobalStyles/GlobalStyles';

export const ReviewContainer = styled(Container)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: start;

  & > div {
    width: 33%;
    height: 100%;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    text-align: center;

    & > h2 {
      height: 10%;
    }

    & > main {
      height: 80%;
      padding: 20px;
      overflow-y: auto;

      & > div {
        height: 40px;
        margin: 5px 0;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;