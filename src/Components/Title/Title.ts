import styled from "styled-components";
import { bigger_h1_font_size, h1_font_size } from '../../Styles/Variables';

export const Title = styled.h1`
  text-align: center;
  font-size: ${h1_font_size};

  @media screen and (min-width: 968px) {
    font-size: ${bigger_h1_font_size};
  }
`;