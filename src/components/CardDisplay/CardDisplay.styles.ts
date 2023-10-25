import styled from "styled-components";

// Styled components for the layout
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  height: 25rem;
`;

export const Card = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid black;
  padding: 2px;
  justify-content: center;
  align-items: center;
  width: min-content;
`;

export const ButtonsWrapper = styled.section`
  display: flex;
  justify-content: center;
  .draw-button {
    margin-right: 2rem;
  }
`;

export const Body = styled.div`
  background-color: white;
  flex-direction: row;
`;
