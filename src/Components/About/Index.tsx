import React from "react";
import { Subtitle } from "../Subtitle/Subtitle";
import { Title } from "../Title/Title";

import {
  AboutSection,
  AboutContainer,
  AboutData,
  AboutButtons,
} from './Style';

export default function About() {
  return (
    <AboutSection id="about">
      <Title>Sobre Mim</Title>
      <Subtitle>Minha Introdução</Subtitle>
      <AboutContainer>
        <AboutData>
          <p>
            Sou um desenvolvedor que gosta de criar e tirar ideias do papel desde o início de 2021, sou muito curioso sobre tecnologia, gosto de compartilhar conhecimento e ajudar pessoas, gosto de trabalhar em equipe e sempre procuro entregar um ótimo trabalho e desempenho.
          </p>

          <AboutButtons>
            <a href="/public/Currículo.pdf" download>
              Download Cv
              <i className="uil uil-download-alt"></i>
            </a>
          </AboutButtons>
        </AboutData>
      </AboutContainer>
    </AboutSection>
  );
}