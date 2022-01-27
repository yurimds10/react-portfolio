import Styled from "styled-components";
import { container_color,
  first_color,
  mb_2
} from '../../Styles/Variables';

export const PortfolioSection = Styled.section`
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 6rem 0 2rem;
  }
`;

export const PortfolioContainer = Styled.div`
  width: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: initial;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PortfolioContent = Styled.div`
  width: 240px;
  height: 240px;
  background-color: ${container_color};
  margin-bottom: ${mb_2};
  border-radius: .25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .15);

  :hover {
    border: 1px solid ${first_color};
  }
`;
