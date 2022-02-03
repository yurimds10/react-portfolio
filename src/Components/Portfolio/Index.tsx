import React from "react";
import PromodoroImg from '../../Assets/Img/promodoro.png';

import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioContent,
  PortfolioImg,
  PortfolioContentTitle,
  PortfolioContentDescription,
  
} from './Style';

import { Title } from "../Title/Title"
import { Subtitle } from "../Subtitle/Subtitle";
import { Button } from '../Button/Button';

export default function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <Title>Portfólio</Title>
      <Subtitle>Meus trabalhos recentes</Subtitle>

      <PortfolioContainer>
        <PortfolioContent>
          <PortfolioImg src={PromodoroImg}/>
          <PortfolioContentTitle>Promodoro Timer App</PortfolioContentTitle>
          <PortfolioContentDescription>
            Esse site foi desenvolvido pensando em você deseja ter mais foco usando a tecnica Promodoro!
          </PortfolioContentDescription>
          <Button>
            Demo
            <i className="uil uil-arrow-right"/>
          </Button>
        </PortfolioContent>

        <PortfolioContent>
          <p className="description">Em Breve!</p>
        </PortfolioContent>

        <PortfolioContent>
          <p className="description">Em Breve!</p>
        </PortfolioContent>
      </PortfolioContainer>
    </PortfolioSection>
  );
}