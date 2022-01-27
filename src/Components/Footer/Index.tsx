import React from "react";

import {
  FooterSection,
  FooterBackground,
  FooterContainer,
  FooterLinks,
  FooterSocials,
  FooterCopy
} from './Style';

export default function Footer() {
  return (
    <FooterSection>
      <FooterBackground>
        <FooterContainer>
          <div>
            <h1>Yuri</h1>
            <span>Frontend developer</span>
          </div>

          <FooterLinks>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>

            <li>
              <a href="#contact">Services</a>
            </li>

            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </FooterLinks>

          <FooterSocials>
            <a href="https://www.linkedin.com/in/yuri-ricardo-mendes-b34753214/" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.github.com/YuriMendess" target="_blank" rel="noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i>
            </a>
          </FooterSocials>
        </FooterContainer>

        <FooterCopy>&#169; Yuri Mendes. All right reserved</FooterCopy>
      </FooterBackground>
    </FooterSection>
  )
}