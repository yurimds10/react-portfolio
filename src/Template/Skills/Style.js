import Styled from 'styled-components';
import VariablesCSS from '../../Variables.css';

export const SkillsSection = Styled.section`
  margin-top: 3rem;
  padding: 2rem 0 4rem;
`;

export const SkillsSectionTitle = Styled.h2`
  text-align: center;
  font-size: var(--h1-font-size);
`;

export const SkillsSectionSubtitle = Styled.span`
  text-align: center;
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
`;

export const SkillsContainer = Styled.div`
  row-gap: 0;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;

  @media (max-width: 350px) {
    margin-right: var(--mb-1);
    margin-left: var(--mb-1);
  }
`;

export const SkillsContent = Styled.div`
  
`;

export const SkillsHeader = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`;

export const SkillsIcon = Styled.i`
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
`;

export const SkillsTitle = Styled.h1`
  font-size: var(--h3-font-size);
`;

export const SkillsSubtitle = Styled.span`
  font-size: var(--small-font-size);
  color: var(--text-color-light);
`;

export const SkillsArrow = Styled.i`
  font-size: 2rem;
  color: var(--first-color);
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
  margin-bottom: var(--mb-0-50);

  h3 {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  span {

  }
`;

export const SkillsBar = Styled.div`
  background-color: var(--first-color);

`