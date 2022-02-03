import Styled from 'styled-components';
import {
  body_color,
  first_color,
  font_medium,
  small_font_size,
  header_height,
  mb_1,
  mb_1_5,
  title_color,
  z_fixed,
  bigger_small_font_size,

} from '../../Styles/Variables';

interface OpenProps {
  open: boolean;
}

export const HeaderSection = Styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${z_fixed};
  background-color: ${body_color};

  @media (min-width: 768px) {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
    
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export const NavContainer = Styled.nav`
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  height: ${header_height};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }


  @media (min-width: 768px) {
    height: calc(3rem + 1.5rem);
    column-gap: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavLogo = Styled.a`
  color: ${title_color};
  font-weight: ${font_medium};
  cursor: pointer;
  &:hover {
    color: ${first_color};
  }
`;

export const NavMenu = Styled.div`
  @media (max-width: 350px) {
    padding: 2rem .25rem 4rem;
  }

  @media (max-width: 350px) {
    padding: 2rem .25rem 4rem;
  }

  @media (max-width: 767px) {
    position: fixed;
    bottom: ${(props: OpenProps) => props.open ? '-100%' : '0'};
    left: 0;
    width: 100%;
    background-color: ${body_color};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: .3s;
  }

  @media (min-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`;

export const NavList = Styled.ul`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; 
  display: grid;
  gap: 1.5rem;

  @media (max-width: 350px) {
    column-gap: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    column-gap: 2rem;
  }
`;

export const NavLink = Styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${small_font_size};
  color: ${title_color};
  font-weight: ${font_medium};

  :hover {
    color: ${first_color};
  }

  @media screen and (min-width: 968px) {
    font-size: ${bigger_small_font_size};
  }
`;

export const NavIcon = Styled.i`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavCloseButton = Styled.button`
  border: none;
  background-color: transparent;
`;

export const NavClose = Styled.i`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${first_color};

  @media (min-width: 768px) {display: none;}
`;

export const NavButtons = Styled.div``;

export const NavToggle = Styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: ${title_color};
  font-weight: ${font_medium};
  
  &:hover {
    color: ${first_color};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;