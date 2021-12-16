import React from "react";

import{
  SkillsSection,
  SkillsContainer,
  SkillsHeader,
} from './Style'


export default function Skills() {
  return (
    <SkillsSection>
      <h2>Skills</h2>
      <span>My technical level</span>

      <SkillsContainer>
        <SkillsHeader>
          <i className="uil uil-brackets-curly skills-icon"></i>

          <div>
            <h1>Frontend developer</h1>
            <span>More than 4 years</span>
          </div>

          <i className="uil uil-angle-down skills-arrow"></i>
        </SkillsHeader>
      </SkillsContainer>
    </SkillsSection>
  );
}