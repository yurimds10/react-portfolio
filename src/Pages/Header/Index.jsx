import React from "react";
import { HeaderContainer, NavContainer, NavLogo, NavMenu, NavList, NavButtons, NavToggle } from './Style'

export default function Header() {
  return (
    <div>
      <HeaderContainer>
        <NavContainer>
          <NavLogo>Yuri</NavLogo>
          <NavMenu>
            <NavList>
              <li>
                <a href="#home">
                  <i className="uil uil-estate"></i>
                  Home
                </a>
              </li>

              <li>
                <a href="#about">
                  
                  <i className="uil uil-user"></i>
                  About
                </a>
              </li>

              <li>
                <a href="#Skills">
                  
                  <i className="uil uil-file"></i>
                  Skills
                </a>
              </li>

              <li>
                <a href="#Portfolio">
                  
                  <i className="uil uil-scenery"></i>
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#Contact">
                   
                  <i className="uil uil-message"></i>
                  Contact Me
                </a>
              </li>
            </NavList>
            <i className="uil uil-times" id="nav-close"/>
          </NavMenu>
          <NavButtons>
            <NavToggle>
              <i className="uil uil-apps"/>
            </NavToggle>
          </NavButtons>
        </NavContainer>
      </HeaderContainer>
    </div>
  )
}