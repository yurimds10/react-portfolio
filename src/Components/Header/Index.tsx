import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <HeaderSection id="header">     
      <NavContainer>
        <NavLogo>Yuri</NavLogo>
        <NavMenu className="nav-menu">
          <NavList>
            <li>
              <NavLink href="#home">
                <NavIcon className="uil uil-estate"/>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink href="#about">
                <NavIcon className="uil uil-user"/>
                 About
              </NavLink>
            </li>

            <li>
              <NavLink href="#skills">
                <NavIcon className="uil uil-file"/>
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink href="#services">
                <NavIcon className="uil uil-file"/>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink href="#portfolio">
                <NavIcon className="uil uil-scenery"/>
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink href="#contact">
                <NavIcon className="uil uil-message"/>
                Contact Me
              </NavLink>
            </li>
          </NavList>
          <NavCloseButton onClick={() => console.log(false)}>
            <NavClose className="uil uil-times"/>
          </NavCloseButton>
        </NavMenu>
        <NavButtons>
            <NavToggle onClick={() => console.log(true)}>
              <i className="uil uil-apps"/>
            </NavToggle>
        </NavButtons>
      </NavContainer>
    </HeaderSection>
  )
}