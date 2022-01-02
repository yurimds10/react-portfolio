import React from "react";
import {
  HeaderSection,
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  NavIcon,
  NavCloseButton,
  NavClose,
  NavButtons,
  NavToggle
} from './Style';

export default function Header() {

  return (
    <HeaderSection id="header">     
      <NavContainer>
        <NavLogo>Yuri</NavLogo>
        <NavMenu>
          <NavList>
            <li>
              <NavLink href="#home">
                <NavIcon className="uil uil-estate"></NavIcon>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink href="#about">
                <NavIcon className="uil uil-user"></NavIcon>
                 About
              </NavLink>
            </li>

            <li>
              <NavLink href="#skills">
                <NavIcon className="uil uil-file"></NavIcon>
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink href="#services">
                <NavIcon className="uil uil-file"></NavIcon>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink href="#portfolio">
                <NavIcon className="uil uil-scenery"></NavIcon>
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink href="#contact">
                <NavIcon className="uil uil-message"></NavIcon>
                Contact Me
              </NavLink>
            </li>
          </NavList>
          <NavCloseButton onClick={() => false}>
            <NavClose className="uil uil-times"/>
          </NavCloseButton>
        </NavMenu>
        <NavButtons>
            <NavToggle onClick={() => true}>
              <i className="uil uil-apps"/>
            </NavToggle>
        </NavButtons>
      </NavContainer>
    </HeaderSection>
  )
}