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