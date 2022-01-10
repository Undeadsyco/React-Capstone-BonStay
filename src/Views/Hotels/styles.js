import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles/GlobalStyles";

export const HotelsContainer = styled(GridContainer)`
  padding: 20px 200px;
  overflow-y: auto;
  gap: 20px;
`;

export const RowContainer = styled.div`
  height: 160px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 5px;
`;

export const ColContainer = styled.div`
  width: ${props => props.width};
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  & > div{
    width: 100%;
  }

  & > button {
    width: 100%;
    margin: 6px 0;
  }
`;

export const ImgContainer = styled.div`
  border: 2px solid black;
  border-radius: 50%;
  height: 100%;
`;