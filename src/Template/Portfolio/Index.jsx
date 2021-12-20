import React from "react";
import PortfolioImg1 from '../../Assets/Img/portfolio1.jpg';
import PortfolioImg2 from '../../Assets/Img/portfolio2.jpg';
import PortfolioImg3 from '../../Assets/Img/portfolio3.jpg';

import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioCarousel,
  PortfolioContent,
  PortfolioData,
  ButtonCarousel,
  CarouselPortfolioIcon,
} from './Style';

export default function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <h2>Portfolio</h2>
      <span>Most recent work</span>

      <PortfolioContainer>
        <PortfolioCarousel>
          {/* <!--==================== PORTFOLIO 1 ====================--> */}
          <PortfolioContent>
            <img src={PortfolioImg1} alt="portfolio 1"/>

            <PortfolioData>
              <h3>Modern Website</h3>
              <p>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href="#">
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </PortfolioData>
          </PortfolioContent>

          {/* <!--==================== PORTFOLIO 2 ====================--> */}
          <PortfolioContent>
            <img src={PortfolioImg2} alt="portfolio 2"/>
                        

            <PortfolioData>
              <h3>Brand Design</h3>
              <p>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href="#">
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </PortfolioData>
          </PortfolioContent>

          {/* <!--==================== PORTFOLIO 3 ====================--> */}
          <PortfolioContent>
            <img src={PortfolioImg3} alt="portfolio 3"/>
                        

            <PortfolioData>
              <h3>Online Store</h3>
              <p>
                Website adaptable to all devices, with ui components and animated interactions.
              </p>
              <a href="#">
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </PortfolioData>
          </PortfolioContent>
        </PortfolioCarousel>

        {/* <!-- Add Arrows --> */}
        <ButtonCarousel>
          <CarouselPortfolioIcon className="uil uil-angle-left-b"></CarouselPortfolioIcon>
        </ButtonCarousel>

        <ButtonCarousel>
          <CarouselPortfolioIcon className="uil uil-angle-right-b"></CarouselPortfolioIcon>
        </ButtonCarousel>
      </PortfolioContainer>
    </PortfolioSection>
  );
}