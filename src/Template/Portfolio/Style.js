import Styled from "styled-components";
import VariablesCSS from '../../Variables.css';

export const PortfolioSection = Styled.section`
  padding: 2rem 0 4rem;

  h2 {
    text-align: center;
    font-size: var(--h1-font-size);
  }

  span {
    text-align: center;
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
  }
`;

export const PortfolioContainer = Styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  overflow: initial;
`;

export const PortfolioCarousel = Styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

export const PortfolioContent = Styled.div`
  margin-right: 2rem;
  padding: 0 1.5rem;
  display: grid;
  gap: 1.5rem;
`;

export const PortfolioData = Styled.div`
  h3 {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-50);
  }

  p {
    margin-bottom: var(--mb-0-75);
  }

  a {
    display: inline-block;
    background-color: var(--first-color);
    color: #fff;
    border-radius: .5rem;
    font-weight: var(--font-medium);
    border-radius: 30px;
    display: inline-flex;
    align-items: center;
    padding: .5rem 1rem;

    i {
      font-size: 1.25rem;
      margin-left: var(--mb-0-50);
      transition: .3s;
    }

    :hover {
      background-color: var(--first-color-alt);
      i {
        transform: translateX(.25rem);
      }
    }
  }
`;

export const ButtonCarousel = Styled.button`
  background-color: transparent;
  border: none;
`;

export const CarouselPortfolioIcon = Styled.i`
  font-size: 2rem;
  color: var(--first-color);
  cursor: pointer;
`;