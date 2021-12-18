import Styled from "styled-components";
import VariablesCSS from '../../Variables.css';

export const AboutSection = Styled.section`
  margin-top: 2rem;
  text-align: center;

  h2 {
    font-size: var(--h1-font-size);
  }

  span {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
  }
`;

export const AboutContainer = Styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;
`;

export const AboutData = Styled.div`
  p {
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }
`;

export const AboutButtons = Styled.div`
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    background-color: var(--first-color);
    color: #fff;
    padding: .75rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);
    border-radius: 30px;
    display: inline-flex;
    align-items: center;

    :hover {
      cursor: pointer;
      background-color: var(--first-color-alt);

      i {
        transform: translateY(.25rem);
      }
    }

    i {
      font-size: 1.25rem;
      margin-left: var(--mb-0-50);
      transition: .3s;
    }
  }
`;