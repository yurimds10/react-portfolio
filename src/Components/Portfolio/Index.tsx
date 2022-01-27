import React from "react";

import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioContent,
  
} from './Style';

import { Title } from "../Title/Title"
import { Subtitle } from "../Subtitle/Subtitle";

export default function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <Title>Portfolio</Title>
      <Subtitle>Most recent work</Subtitle>

      <PortfolioContainer>
        <PortfolioContent>

        </PortfolioContent>

        <PortfolioContent>
          
        </PortfolioContent>
        
        <PortfolioContent>
          
        </PortfolioContent>
      </PortfolioContainer>
    </PortfolioSection>
  );
}