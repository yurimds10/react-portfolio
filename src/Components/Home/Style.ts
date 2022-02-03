import Styled from 'styled-components';
import {
  bigger_big_font_size,
  bigger_h3_font_size,
  big_font_size,
  first_color,
  first_color_alt,
  font_medium,
  h3_font_size,
  mb_0_25,
  mb_0_50,
  mb_0_75,
  mb_1,
  mb_1_5,
  mb_2,
  small_font_size,
  text_color,
  title_color

} from '../../Styles/Variables';

export const HomeSection = Styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const HomeContainer = Styled.div`
  gap: 1rem;
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  gap: 1.5rem;

  @media screen and (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }

  @media screen and (min-width: 768px) {
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

  @media screen and (max-width: 350px) {
    grid-template-columns: .25fr 3fr;
  }

  @media screen and (min-width: 568px) {
    grid-template-columns: max-content 1fr 1fr;
  }

  @media (min-width: 768px) {
    padding-top: 4.5rem;
    column-gap: 2rem;
  }
`;

export const HomeSocial = Styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  a {
    font-size: 1.25rem;
    color: ${first_color};

    :hover {
      color: ${first_color_alt};
    }
  }

  @media screen and (min-width: 1024px) {
    margin-right: 3rem;
  }
`;

export const HomeImg = Styled.div`
  svg {
    width: 270px;
    height: 270px;
    transition: .8s;
    
  }

  @media screen and (min-width: 568px) {
    order: 1;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    width: 470px;
    height: 470px;

    svg {
    width: 450px;
    height: 450px;
    transition: .8s;
    }

    :hover {
      svg {
        transition: .8s;
        width: 470px;
        height: 470px;
        transition: .8s;
      }
    }
  }
`;

export const HomeData = Styled.div`
  grid-column: 1/3;

  @media screen and (min-width: 568px) {
    grid-column: initial;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`;

export const HomeTitle = Styled.h1`
  font-size: ${big_font_size};

  @media screen and (min-width: 968px) {
    font-size: ${bigger_big_font_size};
  }
`;

export const HomeSubtitle = Styled.h3`
  font-size: ${h3_font_size};
  color: ${text_color};
  font-weight: ${font_medium};
  margin-bottom: ${mb_0_75};

  @media screen and (min-width: 968px) {
    font-size: ${bigger_h3_font_size};
  }
`;

export const HomeDescription = Styled.p`
  margin-bottom: ${mb_2};
`;

export const HomeButton = Styled.a`
  display: inline-block;
  background-color: ${first_color};
  color: #fff;
  padding: .75rem;
  border-radius: .5rem;
  font-weight: ${font_medium};
  border-radius: 30px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  :hover {
    background-color: ${first_color_alt};
    i {
      transform: translateX(.25rem);
    }
  }

  i {
    font-size: 1.25rem;
    margin-left: ${mb_0_50};
    transition: .3s;
  }
`;

export const HomeScroll = Styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const HomeScrollButton = Styled.a`
  color: ${first_color};
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
    font-size: ${small_font_size};
    color: ${title_color};
    font-weight: ${font_medium};
    margin-right: ${mb_0_25};
  }

  .arrow {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`;