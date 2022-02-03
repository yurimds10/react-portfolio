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


export default function Header(): JSX.Element {

  const [open, setOpen] = useState<boolean>(true);

  return (
    <HeaderSection id="header">     
      <NavContainer>
        <NavLogo>Yuri</NavLogo>
        <NavMenu open={open}>
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
                 Sobre
              </NavLink>
            </li>

            <li>
              <NavLink href="#skills">
                <NavIcon className="uil uil-file"/>
                Habilidades
              </NavLink>
            </li>

            <li>
              <NavLink href="#portfolio">
                <NavIcon className="uil uil-scenery"/>
                Portfólio
              </NavLink>
            </li>

            <li>
              <NavLink href="#contact">
                <NavIcon className="uil uil-message"/>
                Contato
              </NavLink>
            </li>
          </NavList>
          <NavCloseButton onClick={() => setOpen(true)}>
            <NavClose className="uil uil-times"/>
          </NavCloseButton>
        </NavMenu>
        <NavButtons>
            <NavToggle onClick={() => setOpen(false)}>
              <i className="uil uil-apps"/>
            </NavToggle>
        </NavButtons>
      </NavContainer>
    </HeaderSection>
  )
}