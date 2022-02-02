import styled from "styled-components";
import { first_color, first_color_alt, z_tooltip } from "../../Styles/Variables";

interface ShowScrollProps {
  showScroll: boolean;
}

export const ScrollUp = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${(props: ShowScrollProps) => props.showScroll ? '5rem' : '-20%'};
  background-color: ${first_color};
  opacity: .8;
  padding: 0 .3rem;
  border-radius: .4rem;
  z-index: ${z_tooltip};
  transition: .4s;

  &:hover {
    background-color: ${first_color_alt};
  }

  i {
    font-size: 1.5rem;
    color: #FFF;
  }
`;