import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: row;
    max-width: 1110px;
    border-radius: 0.5rem;
  }
`;

export default CardsContainer;
