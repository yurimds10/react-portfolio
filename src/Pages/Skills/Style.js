import Styled from 'styled-components';
import VariablesCSS from '../../Variables.css';

export const SkillsSection = Styled.section`
  padding: 2rem 0 4rem;
  h2 {
    font-size: var(--h1-font-size);
  }

  span {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
  }
`;

export const SkillsContainer = Styled.div`
  row-gap: 0;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;
`;

export const SkillsContent = Styled.div`

`;

export const SkillsHeader = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;

  .skills-icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }

  .skills-arrow {
    font-size: 2rem;
    color: var(--first-color);
  }
`;