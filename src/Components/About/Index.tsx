import React from "react";

import {
  AboutSection,
  AboutContainer,
  AboutData,
  AboutButtons,
} from './Style';

export default function About() {
  return (
    <AboutSection id="about">
      <h2>About Me</h2>
      <span>My Introduction</span>
      <AboutContainer>
        <AboutData>
          <p>
            I'm a developer who likes to create and take ideas from paper since the beginning of 2021, I'm very curious about technology, I like to share knowledge and help people, I like to work in a team and I always try to deliver a great work and performance.
          </p>

          <AboutButtons>
            <a href="/public/Currículo.pdf" download>Download Cv <i className="uil uil-download-alt"></i></a>
          </AboutButtons>
        </AboutData>
      </AboutContainer>
    </AboutSection>
  );
}