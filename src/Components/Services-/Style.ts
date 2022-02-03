import Styled from 'styled-components';
import {
  container_color,
  first_color,
  font_medium,
  h3_font_size,
  mb_0_25,
  mb_0_50,
  mb_1,
  mb_1_5,
  small_font_size,
  z_modal,
} from '../../Styles/Variables';


export const ServicesSection = Styled.section`
  padding: 2rem 0 4rem;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const ServicesContainer = Styled.div`
  max-width: 768px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: flex;
  justify-content: center;

  @media (max-width: 350px) {
    margin-right: ${mb_1};
    margin-left: ${mb_1};
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 218px);
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 238px);
  }
`;

export const ServicesContent = Styled.div`
  width: 350px;
  position: relative;
  background-color: ${container_color};
  padding: 3.5rem .5rem 1.25rem 1.5rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
  transition: .3s;

  :hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
  }

  @media (max-width: 350px) {
    padding-right: 3.5rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 0 2rem 2.5rem;
  }
`;

export const ServicesIcon = Styled.i`
  display: block;
  font-size: 1.5rem;
  color: ${first_color};
  margin-bottom: ${mb_1};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesTitle = Styled.h3`
  font-size: ${h3_font_size};
  margin-bottom: ${mb_1};
  font-weight: ${font_medium};
`;

export const ServicesButton = Styled.button`
  font-weight: ${font_medium};
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: ${first_color};
  cursor: pointer;
  padding: 0;
  font-size: ${small_font_size};
  border: none;

  :hover {
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

export const ServicesModal = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: ${z_modal};
  opacity: 0;
  visibility: hidden;
  transition: .3s;

  @media (max-width: 350px) {
    padding: 0 .5rem;
  }
`;

export const ServicesModalContent = Styled.div`
  position: relative;
  background-color: ${container_color};
  padding: 1.5rem;
  border-radius: .5rem;

  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const ServicesModalTitle = Styled.h4`
  font-size: ${h3_font_size};
  font-weight: ${font_medium};
  margin-bottom: ${mb_1_5};
`;

export const ServicesModalClose =  Styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${first_color};

  :hover {
    cursor: pointer;
  }
`;

export const ServicesModalServices = Styled.span`
  display: grid;
  gap: 1.5rem;
  row-gap: 1rem;
`;

export const ServicesModalService = Styled.li`
  display: flex;

  i {
    color: ${first_color};
    margin-right: ${mb_0_25};
  }
`;