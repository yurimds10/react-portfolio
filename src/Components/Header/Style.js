import Styled from 'styled-components';
import VariablesCSS from '../../Variables.css';

export const HeaderSection = Styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

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
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 350px) {
    margin-right: var(--mb-1);
    margin-left: var(--mb-1);
  }


  @media (min-width: 768px) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavLogo = Styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
  cursor: pointer;
  :hover {
    color: var(--first-color);
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
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
    order-radius: 1.5rem 1.5rem 0 0;
    transition: .3s;
  }

  @media (min-width: 768px) {
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
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);

  :hover {
    color: var(--first-color);
  }
`;

export const NavIcon = Styled.i`
  font-size: 1.2rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavClose = Styled.i`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavButtons = Styled.div`

`;

export const NavToggle = Styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--title-color);
  font-weight: var(--font-medium);
  :hover {
    color: var(--first-color);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;