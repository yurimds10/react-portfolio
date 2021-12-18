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
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
`;

export const ServicesContent = Styled.div`
  position: relative;
  background-color: var(--container-color);
  padding: 3.5rem .5rem 1.25rem 1.5rem;
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
  transition: .3s;

  :hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
  }

  i {
      display: block;
      font-size: 1.5rem;
      color: var(--first-color);
      margin-bottom: var(--mb-1);
    }

    h3 {
      font-size: var(--h3-font-size);
      margin-bottom: var(--mb-1);
      font-weight: var(--font-medium);
    }

    span {
      display: inline-block;
      background-color: var(--first-color);
      color: #fff;
      padding: 1rem;
      border-radius: .5rem;
      font-weight: var(--font-medium);
      display: inline-flex;
      align-items: center;
      padding: .75rem 1rem;
      padding: 0;
      background-color: transparent;
      color: var(--first-color);
      cursor: pointer;
      font-size: var(--small-font-size);

      :hover {
        background-color: var(--first-color-alt);
        background-color: transparent;
        color: var(--first-color-alt);

        i {
          :hover {
          cursor: pointer;
          font-size: var(--small-font-size);
          }
        }
      }

      i {
        display: block;
        font-size: 1.5rem;
        color: var(--first-color);
        margin-bottom: var(--mb-1);

        
      }
    }
`;

export const ServicesModal = Styled.div`

`;

export const ServicesModalContent = Styled.div`

`;