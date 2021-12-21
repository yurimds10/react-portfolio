import React from "react";
import {
  HeaderSection,
  HeaderContainer,
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  NavIcon,
  NavClose,
  NavButtons,
  NavToggle

} from './Style'

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
          <NavClose className="uil uil-times" id="nav-close"/>
        </NavMenu>
        <NavButtons>
            <NavToggle onClick={() => console.log(`header button`)}>
              <i className="uil uil-apps"/>
            </NavToggle>
        </NavButtons>
      </NavContainer>
    </HeaderSection>
  )
}