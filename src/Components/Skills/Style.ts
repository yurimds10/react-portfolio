import Styled from 'styled-components';
import {
  container_color,
  first_color,
  mb_1,
  mb_1_5,
} from '../../Styles/Variables';

export const SkillsSection = Styled.section`
  margin-top: 3rem;
  padding: 2rem 0 4rem;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const SkillsContainer = Styled.div`
  row-gap: 0;
  max-width: 768px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
  @media screen and (max-width: 330px) {
    justify-content: space-evenly;
  }

  @media (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SkillsContent = Styled.div``;

export const SkillDiv = Styled.div`
  width: 100px;
  height: 100px;
  background-color: ${container_color};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${mb_1_5};
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .15);

  :hover {
    border: 2px solid ${first_color};
  }

  @media (min-width: 544px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 170px;
  }
`;

export const SkillIcon = Styled.i`
  font-size: 3rem;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;