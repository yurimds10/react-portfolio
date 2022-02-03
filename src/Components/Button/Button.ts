import styled from 'styled-components';
import {
  first_color,
  font_medium,
  first_color_alt,
  mb_0_50,
} from '../../Styles/Variables';

export const Button = styled.button`
  background-color: ${first_color};
  color: #fff;
  padding: .75rem;
  border-radius: .5rem;
  font-weight: ${font_medium};
  border-radius: 30px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border: none;

  :hover {
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