import Styled from 'styled-components';

export const HomeSection = Styled.section`
  padding: 2rem 0 4rem;
`;

export const HomeContainer = Styled.div`
  gap: 1rem;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;
`;

export const HomeContent = Styled.div`
  grid-template-columns: .5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
  display: grid;
  gap: 1.5rem;
`;

export const HomeSocial = Styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  a {
    font-size: 1.25rem;
    color: var(--first-color);
  }
`;

export const HomeImg = Styled.div`
  
`;