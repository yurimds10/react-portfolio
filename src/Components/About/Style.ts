import Styled from "styled-components";
import {
  first_color,
  first_color_alt,
  font_medium,
  mb_0_50,
  mb_1,
  mb_1_5,
  mb_2_5,
} from "../../Styles/Variables";

export const AboutSection = Styled.section`
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const AboutContainer = Styled.div`
  max-width: 768px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  gap: 1.5rem;

  @media (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    column-gap: 5rem;
  }
`;

export const AboutData = Styled.div`
  p {
    text-align: center;
    margin-bottom: ${mb_2_5};
  }
`;

export const AboutButtons = Styled.div`
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    background-color: ${first_color};
    color: #fff;
    padding: .75rem;
    border-radius: .5rem;
    font-weight: ${font_medium};
    border-radius: 30px;
    display: inline-flex;
    align-items: center;

    :hover {
      cursor: pointer;
      background-color: ${first_color_alt};

      i {
        transform: translateY(.25rem);
      }
    }

    i {
      font-size: 1.25rem;
      margin-left: ${mb_0_50};
      transition: .3s;
    }
  }
`;