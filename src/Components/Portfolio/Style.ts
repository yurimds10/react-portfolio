import Styled from "styled-components";
import {
  container_color,
  first_color,
  h3_font_size,
  mb_0_50,
  small_font_size,
  mb_1_5,
  mb_0_75,

} from '../../Styles/Variables';

export const PortfolioSection = Styled.section`
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const PortfolioContainer = Styled.div`
  max-width: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: initial;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PortfolioContent = Styled.div`
  width: 240px;
  height: 350px;
  background-color: ${container_color};
  margin: 1rem;
  
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    border: 1px solid ${first_color};
  }
`;

export const PortfolioImg = Styled.img`
  width: 90%;
  margin-top: 1rem;
`;

export const PortfolioContentTitle = Styled.h2`
  font-size: ${h3_font_size};
  text-align: center;
  margin-top: ${mb_0_50};
`;

export const PortfolioContentDescription = Styled.p`
  text-align: center;
  padding: 0 .25rem;
  margin-top: ${mb_0_75};
  margin-bottom: ${mb_1_5};
  font-size: ${small_font_size};
`;
