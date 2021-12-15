import Styled from 'styled-components';
import VariablesCSS from '../../Variables.css'

export const HeaderContainer = Styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
`;

export const NavContainer = Styled.nav`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const NavList = Styled.ul`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  display: grid;
  gap: 1.5rem;
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    :hover {
      color: var(--first-color);
    }

    i {
      font-size: 1.2rem;
    }
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
`;