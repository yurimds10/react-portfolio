import Styled from 'styled-components';
import VariablesCSS from '../../Variables.css';

export const HomeSection = Styled.section`
  padding: 2rem 0 4rem;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const HomeContainer = Styled.div`
  gap: 1rem;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;

  @media (max-width: 350px) {
    margin-right: var(--mb-1);
    margin-left: var(--mb-1);
  }

  @media (min-width: 768px) {
    row-gap: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HomeContent = Styled.div`
  grid-template-columns: .5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
  display: grid;
  gap: 1.5rem;

  @media (max-width: 350px) {
    grid-template-columns: .25fr 3fr;
  }

  @media (min-width: 568px) {
    grid-template-columns: max-content 1fr 1fr;
  }

  @media (min-width: 768px) {
    padding-top: 5.5rem;
    column-gap: 2rem;
  }
`;

export const HomeSocial = Styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  a {
    font-size: 1.25rem;
    color: var(--first-color);

    :hover {
      color: var(--first-color-alt);
    }
  }

  @media (min-width: 1024px) {
    transform: translateX(-6rem);
  }
`;

export const HomeImg = Styled.div`
  svg {
    width: 250px;
    height: 200px;
    transition: .8s;
  }

  :hover {
    svg {
      transition: .8s;
      width: 270px;
      height: 200px;
      transition: .8s;
    }
    
  }

  @media (min-width: 568px) {
    order: 1;
    justify-self: center;
  }

  @media (min-width: 1024px) {
    svg {
    width: 350px;
    height: 300px;
    transition: .8s;
    }

    :hover {
      svg {
        transition: .8s;
        width: 370px;
        height: 310px;
        transition: .8s;
      }
    }
  }
`;

export const HomeData = Styled.div`
  grid-column: 1/3;

  @media (min-width: 568px) {
    grid-column: initial;
  }
`;

export const HomeTitle = Styled.h1`
  font-size: var(--big-font-size);
`;

export const HomeSubtitle = Styled.h3`
  font-size: var(--h3-font-size);
  color: var(--text-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-75);
`;

export const HomeDescription = Styled.p`
  margin-bottom: var(--mb-2);
`;

export const HomeButton = Styled.a`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: .75rem;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  border-radius: 30px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  :hover {
    background-color: var(--first-color-alt);
    i {
      transform: translateX(.25rem);
    }
  }

  i {
    font-size: 1.25rem;
    margin-left: var(--mb-0-50);
    transition: .3s;
  }
`;

export const HomeScroll = Styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const HomeScrollButton = Styled.a`
  color: var(--first-color);
  transition: .3s;

  display: inline-flex;
  align-items: center;

  :hover {
    transform: translateY(0.25rem);
    cursor: pointer;
  }

  .mouse {
    font-size: 1.50rem;
  }

  span {
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }

  .arrow {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
  }
`;