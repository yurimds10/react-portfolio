import styled from 'styled-components';
import {
  first_color,
  small_font_size,
  title_color,
  font_medium,
  mb_0_25

} from '../../Styles/Variables'

export const ScrollDown = styled.a`
  color: ${first_color};
  transition: .3s;

  display: inline-flex;
  align-items: center;

  :hover {
    transform: translateY(0.25rem);
    cursor: pointer;
  }

  .mouse {
    font-size: 1.50rem;
  }

  span {
    font-size: ${small_font_size};
    color: ${title_color};
    font-weight: ${font_medium};
    margin-right: ${mb_0_25};
  }

  .arrow {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`;