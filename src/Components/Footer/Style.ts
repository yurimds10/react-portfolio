import Styled from "styled-components";
import {
  bigger_h1_font_size,
  bigger_small_font_size,
  first_color,
  first_color_lighter,
  h1_font_size,
  mb_0_25,
  mb_1,
  mb_1_5,
  mb_3,
  smaller_font_size,
  small_font_size,
} from '../../Styles/Variables';

export const FooterSection = Styled.footer`
  padding-top: 2rem;
`;

export const FooterBackground = Styled.div`
  background-color: ${first_color};
  padding: 2rem 0 3rem;

  @media (min-width: 768px) {
    padding: 3rem 0 3.5rem;
  }
`;

export const FooterContainer = Styled.div`
  max-width: 768px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  gap: 1.5rem;
  row-gap: 3.5rem;

  h1 {
    font-size: ${h1_font_size};
    margin-bottom: ${mb_0_25};
    color: #FFF;

    @media screen and (min-width: 968px) {
      font-size: ${bigger_h1_font_size};
    }
  }

  span {
    font-size: ${small_font_size};
    color: #FFF;

    @media screen and (min-width: 968px) {
      font-size: ${bigger_small_font_size};
    }
  }

  @media (max-width: 350px) {
    margin-right: ${mb_1});
    margin-left: ${mb_1});
  }

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const FooterLinks = Styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  a {
    color: #FFF;

    :hover {
      color: ${first_color_lighter};
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const FooterSocials = Styled.div`
  a {
    font-size: 1.25rem;
    margin-right: ${mb_1_5};
    color: #FFF;

    :hover {
      color: ${first_color_lighter};
    }
  }

  @media (min-width: 768px) {
    justify-self: flex-end;
  }
`;

export const FooterCopy = Styled.p`
  font-size: ${smaller_font_size};
  text-align: center;
  color: #FFF;
  margin-top: ${mb_3};

  @media (min-width: 768px) {
    margin-top: 4.5rem;
  }
`;