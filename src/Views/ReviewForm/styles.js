import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const ReviewContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    width: 40%;
    height: 45%;
    padding: 20px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    & > h2 {
      margin: 5px;
      text-align: center;
    }

    & > div {
      &.inputContainer {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        & > textarea {
          margin-top: 3px;
          width: 100%;
          height: 85%;
        }
      }

      &.btnContainer {
        height: 25%;
        width: 100%;
        display: flex;
        justify-content: right;
        align-items: end;

        & > button {
          height: 60%;
          width: 25%;
          border-radius: 10px;
        }
      }
    }
  }
`;
