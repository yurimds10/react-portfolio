import Styled from "styled-components";
import {
  first_color,
  font_medium,
  h3_font_size,
  input_color,
  mb_0_75,
  mb_1,
  mb_1_5,
  mb_2,
  smaller_font_size,
  small_font_size,
  text_color,
  text_color_light,
  title_color,
  body_font,
  normal_font_size,
  first_color_alt,
  mb_0_50,
} from '../../Styles/Variables';

export const ContactSection = Styled.section`
  padding: 2rem 0 4rem;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const ContactContainer= Styled.div`
  margin-top: 2rem;
  row-gap: 3rem;
  max-width: 768px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  gap: 1.5rem;
  
  @media (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContactInformation = Styled.div`
  display: flex;
  margin-bottom: ${mb_2};

  i {
    font-size: 2rem;
    color: ${first_color};
    margin-right: ${mb_0_75};
  }

  h3 {
    font-size: ${h3_font_size};
    font-weight: ${font_medium};
  }

  span {
    font-size: ${small_font_size};
    color: ${text_color_light};
  }
`;

export const ContactForm = Styled.form``;

export const ContactInputs = Styled.div``;

export const ContactContent = Styled.div`
  background-color: ${input_color};
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
  margin-bottom: 1rem;
`;

export const ContactLabel = Styled.label`
  font-size: ${smaller_font_size};
  color:${title_color};
`;

export const ContactInput = Styled.input`
  width: 100%;
  background-color: ${input_color};
  color: ${text_color};
  font-family: ${body_font};
  font-size: ${normal_font_size};
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`;

export const ContactTextArea = Styled.textarea`
  width: 100%;
  background-color: ${input_color};
  color:${text_color};
  font-family: ${body_font};
  font-size: ${normal_font_size};
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`;

export const ContactButton = Styled.a`
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
      transform: translateX(.25rem);
    }
  }
  
  i {
    font-size: 1.25rem;
    margin-left: ${mb_0_50};
    transition: .3s;
  }
`;