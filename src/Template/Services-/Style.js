import Styled from 'styled-components';

export const ServicesSection = Styled.section`
  padding: 2rem 0 4rem;

  h2 {
    font-size: var(--h1-font-size);
    text-align: center;
  }

  span {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
    text-align: center;
  }
`;

export const ServicesContainer = Styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: flex;
  justify-content: center;

  @media (max-width: 350px) {
    margin-right: var(--mb-1);
    margin-left: var(--mb-1);
  }
`;

export const ServicesContent = Styled.div`
  width: 250px;
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem .5rem 1.25rem 1.5rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
  transition: .3s;

  :hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
  }
`;

export const ServicesIcon = Styled.i`
  display: block;
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: var(--mb-1);
`;

export const ServicesTitle = Styled.h3`
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  font-weight: var(--font-medium);
`;

export const ServicesButton = Styled.button`
  font-weight: var(--font-medium);
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: var(--first-color);
  cursor: pointer;
  padding: 0;
  font-size: var(--small-font-size);
  border: none;

  :hover {
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
  z-index: var(--z-modal);
  opacity: 0;
  visibility: hidden;
  transition: .3s;
`;

export const ServicesModalContent = Styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: .5rem;
`;

export const ServicesModalTitle = Styled.h4`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1-5);
`;

export const ServicesModalClose =  Styled.i`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);

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
    color: var(--first-color);
    margin-right: var(--mb-0-25);
  }
`;