import React from "react";
import {HeaderContainer, NavContainer, NavLogo, NavMenu, NavList, NavButtons, NavToggle} from './Style'

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
                </a>
              </li>

              <li>
                <a href="#home">
                  <i className="uil uil-user"></i>
                </a>
              </li>

              <li>
                <a href="#home">
                  <i className="uil uil-file"></i>
                </a>
              </li>

              <li>
                <a href="#home">
                  <i className="uil uil-scenery"></i>
                </a>
              </li>

              <li>
                <a href="#home">
                  <i className="uil uil-message"></i>
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