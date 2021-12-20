import React from "react";

import{
  SkillsSection,
  SkillsSectionTitle,
  SkillsSectionSubtitle,
  SkillsTitle,
  SkillsSubtitle,
  SkillsContainer,
  SkillsHeader,
  SkillsIcon,
  SkillsArrow,
  SkillsList,
  SkillsData,
  SkillsTitles,
  SkillsBar,
} from './Style'


export default function Skills() {
  return (
    <SkillsSection>
      <SkillsSectionTitle>Skills</SkillsSectionTitle>
      <SkillsSectionSubtitle>My technical level</SkillsSectionSubtitle>
      <SkillsContainer>
        <SkillsHeader onClick={() => console.log(`Skills button ok!`)}>
          <SkillsIcon className="uil uil-brackets-curly"></SkillsIcon>
          <div>
            <SkillsTitle>Frontend developer</SkillsTitle>
            <SkillsSubtitle>More than 4 years</SkillsSubtitle>
          </div>
          <SkillsArrow className="uil uil-angle-down"></SkillsArrow>
        </SkillsHeader>
        
        <SkillsList>
          
          <SkillsData>
            <SkillsTitles>
              <h3>HTML 5</h3>
              <span>90%</span>
            </SkillsTitles>

            <SkillsBar>
              <span class="skills__percentage skills__css"></span>
            </SkillsBar>
          </SkillsData>
          
          <SkillsData>
            <SkillsTitles>
              <h3>CSS 3</h3>
              <span>90%</span>
            </SkillsTitles>

            <SkillsBar>
              <span></span>
            </SkillsBar>
          </SkillsData>

          <SkillsData>
            <SkillsTitles>
              <h3>JavaScript</h3>
              <span>90%</span>
            </SkillsTitles>

            <SkillsBar>
              <span></span>
            </SkillsBar>
          </SkillsData>

          <SkillsData>
            <SkillsTitles>
              <h3>TypeScript</h3>
              <span>90%</span>
            </SkillsTitles>

            <SkillsBar>
              <span></span>
            </SkillsBar>
          </SkillsData>

          <SkillsData>
            <SkillsTitles>
              <h3>React JS</h3>
              <span>90%</span>
            </SkillsTitles>

            <SkillsBar>
              <span></span>
            </SkillsBar>
          </SkillsData>
        </SkillsList>
      </SkillsContainer>
    </SkillsSection>
  );
}