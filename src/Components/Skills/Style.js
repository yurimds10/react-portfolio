import Styled from 'styled-components';
import {
  first_color,
  font_medium,
  h1_font_size,
  h3_font_size,
  mb_0_50,
  mb_0_75,
  mb_1,
  mb_1_5,
  mb_2_5,
  mb_3,
  normal_font_size,
  small_font_size,
  text_color_light,
} from '../../Styles/Variables';

export const SkillsSection = Styled.section`
  margin-top: 3rem;
  padding: 2rem 0 4rem;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const SkillsSectionTitle = Styled.h2`
  text-align: center;
  font-size: ${h1_font_size};
`;

export const SkillsSectionSubtitle = Styled.span`
  text-align: center;
  display: block;
  font-size: ${small_font_size};
  margin-bottom: ${mb_3};

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const SkillsContainer = Styled.div`
  row-gap: 0;
  max-width: 768px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  gap: 1.5rem;

  @media (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SkillsContent = Styled.div`
  
`;

export const SkillsHeader = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${mb_2_5};
  cursor: pointer;
`;

export const SkillsIcon = Styled.i`
  font-size: 2rem;
  color: ${first_color};
  margin-right: ${mb_0_75};
`;

export const SkillsTitle = Styled.h1`
  font-size: ${h3_font_size};

  @media (max-width: 350px) {
    font-size: ${normal_font_size};
  }
`;

export const SkillsSubtitle = Styled.span`
  font-size: ${small_font_size};
  color: ${text_color_light};
`;

export const SkillsArrow = Styled.i`
  font-size: 2rem;
  color: ${first_color};
  margin-left: auto;
  transition: .4s;
`;

export const SkillsList = Styled.div`
  display: grid;
  gap: 1.5rem;
  row-gap: 1.5rem;
  padding-left: 2.7rem;
`;

export const SkillsData = Styled.div`

`;

export const SkillsTitles = Styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${mb_0_50};

  h3 {
    font-size: ${normal_font_size};
    font-weight: ${font_medium};
  }
`;

export const SkillsBar = Styled.div`
  background-color: ${first_color};
`