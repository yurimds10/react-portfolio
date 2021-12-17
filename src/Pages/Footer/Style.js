import Styled from "styled-components";
import VariablesCSS from '../../Variables.css';

export const FooterSection = Styled.footer`
  padding-top: 2rem;
`;

export const FooterBackground = Styled.div`
  background-color: var(--first-color);
  padding: 2rem 0 3rem;
`;

export const FooterContainer = Styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;
  row-gap: 3.5rem;

  h1 {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
    color: #FFF;
  }

  span {
    font-size: var(--small-font-size);
    color: #FFF;
  }
`;

export const FooterLinks = Styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  a {
    color: #FFF;

    :hover {
      color: var(--first-color-lighter);
    }
  }
`;

export const FooterSocials = Styled.div`

`;