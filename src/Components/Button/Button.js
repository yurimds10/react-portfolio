import React from 'react';
import VariablesCss from '../../Variables.css'
import Styled from 'styled-components';

export const Button = Styled.button`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: .75rem;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  border-radius: 30px;
  :hover {
    background-color: var(--first-color-alt);
  }
`;

export default function ContactButton() {
  return (
    <Button>Contact Me</Button>
  )
}