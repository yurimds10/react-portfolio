import React from "react";

import{
  SkillsSection,
  SkillsContainer,
  SkillsHeader,
  SkillsList,
  SkillsData,
  SkillsTitles,
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
        <SkillsList>
          <SkillsData>
            <SkillsTitles>
              <h3>HTML 5</h3>
            </SkillsTitles>
          </SkillsData>
          
          <SkillsData>
            <SkillsTitles>
              <h3>CSS 3</h3>
            </SkillsTitles>
          </SkillsData>

          <SkillsData>
            <SkillsTitles>
              <h3>JavaScript</h3>
            </SkillsTitles>
          </SkillsData>

          <SkillsData>
            <SkillsTitles>
              <h3>React JS</h3>
            </SkillsTitles>
          </SkillsData>
        </SkillsList>
      </SkillsContainer>
    </SkillsSection>
  );
}