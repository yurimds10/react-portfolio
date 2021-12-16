import React from "react";

import {
  AboutSection,
  AboutContainer,
  AboutData,
} from './Style';

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <span>My Introduction</span>
      <AboutContainer>
        <img src=""></img>

        <AboutData>
          <p>Web developer, width extensive knowledge, delivering quality work.</p>
        </AboutData>
      </AboutContainer>
    </AboutSection>
  );
}