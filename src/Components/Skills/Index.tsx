import React from "react";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";

import{
  SkillsSection,
  SkillsContainer,
  SkillDiv,
  SkillIcon
} from './Style';


export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Title>habilidades</Title>
      <Subtitle>Meu nível técnico</Subtitle>
      <SkillsContainer>
        
        <SkillDiv><SkillIcon className="devicon-html5-plain colored"></SkillIcon></SkillDiv>
        <SkillDiv><SkillIcon className="devicon-css3-plain colored"></SkillIcon></SkillDiv>
        <SkillDiv><SkillIcon className="devicon-sass-original colored"></SkillIcon></SkillDiv>
        
        <SkillDiv><SkillIcon className="devicon-bootstrap-plain colored"></SkillIcon></SkillDiv>
        <SkillDiv><SkillIcon className="devicon-javascript-plain colored"></SkillIcon></SkillDiv>
        <SkillDiv><SkillIcon className="devicon-typescript-plain colored"></SkillIcon></SkillDiv>

        <SkillDiv><SkillIcon className="devicon-react-original colored"></SkillIcon></SkillDiv>
        <SkillDiv><SkillIcon className="devicon-git-plain colored"></SkillIcon></SkillDiv>
        <SkillDiv><i style={{fontSize: '1.5rem'}}>	&lt;💅&gt;</i></SkillDiv>
        
      </SkillsContainer>
    </SkillsSection>
  );
}