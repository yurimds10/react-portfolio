import Styled from "styled-components";
import VariablesCSS from '../../Variables.css';

export const ContactSection = Styled.section`
  padding: 2rem 0 4rem;
  h2 {
    text-align: center;
  }

  span {
    text-align: center;
    display: block;
  }

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const ContactContainer= Styled.div`
  margin-top: 2rem;
  row-gap: 3rem;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;
  
  @media (max-width: 350px) {
    margin-right: var(--mb-1);
    margin-left: var(--mb-1);
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
  margin-bottom: var(--mb-2);

  i {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }

  h3 {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
  }

  span {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }
`;

export const ContactForm = Styled.form`

`;

export const ContactInputs = Styled.div`
  
`;

export const ContactContent = Styled.div`
  background-color: var(--input-color);
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
  margin-bottom: 1rem;
`;

export const ContactLabel = Styled.label`
  font-size: var(--smaller-font-size);
  color: var(--title-color);
`;

export const ContactInput = Styled.input`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`;

export const ContactTextArea = Styled.textarea`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`;

export const ContactButton = Styled.a`
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
      transform: translateX(.25rem);
    }
  }
  
  i {
    font-size: 1.25rem;
    margin-left: var(--mb-0-50);
    transition: .3s;
  }
`;