import React from "react";
import {
  HeaderContainer,
  NavContainer,
  NavLogo,
  NavMenu,
  NavList,
  NavButtons,
  NavToggle

} from './Style'

/*==================== MENU  SHOW AND HIDDEN ====================*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /*========== MENU SHOW ==========*/
// /* Validate if constant exists */
// if(navToggle) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu');
//     })
// }

// /*========== MENU HIDDEN ==========*/
// /* Validate if constant exists */
// if(navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu');
//     })
// }

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link');

// function linkAction() {
//     const navMenu = document.getElementById('nav-menu');
//     // When we click on each nav__link, we remove the show menu class
//     navMenu.classList.remove('show-menu');
// }

// navLink.forEach(n => n.addEventListener('click', linkAction));

export default function Header() {
  return (
    <div>
      <HeaderContainer id="header">
        <NavContainer>
          <NavLogo>Yuri</NavLogo>
          <NavMenu id="nav-menu">
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
            <NavToggle id="nav-toggle">
              <i className="uil uil-apps"/>
            </NavToggle>
          </NavButtons>
        </NavContainer>
      </HeaderContainer>
    </div>
  )
}