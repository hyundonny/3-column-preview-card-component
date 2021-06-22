import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${(props) => `var(--${props.bgColor})`};
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2.25rem;
  }

  .card__logo {
  }

  .card__title {
    text-transform: uppercase;
    color: var(--light-gray);
    font-family: "Big Shoulders Display";
    font-weight: 700;
    font-size: 2.5rem;
  }

  .card__body {
    color: var(--transparent-white);
    font-family: "Lexend Deca";
    font-weight: 400;
    line-height: 1.75;
  }

  .card__button {
    background: var(--light-gray);
    border: 1px solid var(--light-gray);
    border-radius: 2rem;
    padding: 1rem;
    color: ${(props) => `var(--${props.bgColor})`};
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 1rem;
    width: 9rem;
    cursor: pointer;

    &:active,
    &:hover {
      color: var(--light-gray);
      background-color: ${(props) => `var(--${props.bgColor})`};
    }
  }
`;

export default StyledCard;
