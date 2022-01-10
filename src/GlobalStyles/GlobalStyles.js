import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.width || '100vw'};
  height: ${props => props.height || '100vh'};
`;

export const NestedContainer = styled.div`
  grid-column: ${props => props.colSpan};
  grid-row: ${props => props.rowSpan};
`;

export const GridContainer = styled.div.attrs((props) => ({
  width: props.width || '100%',
  height: props.height || '100%',
  cols: props.cols || '100%',
  rows: props.rows || '100%',
  colSpan: props.colSpan,
  rowSpan: props.rowSpan,
}))`
  display: grid;
  width: ${props => props.width};
  height: ${props => props.height};

  &&.1By2 {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }

  &&.2By1 {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }

  &&.2By2 {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
  }

  &&.multiRows {
    grid-template-columns: 100%;
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &&.multiCols {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: 100%;
  }

  &&.multiGrid {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }
`;