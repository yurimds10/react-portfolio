import React from "react";
import PortfolioImg1 from '../../Assets/Img/portfolio1.jpg';
import PortfolioImg2 from '../../Assets/Img/portfolio2.jpg';
import PortfolioImg3 from '../../Assets/Img/portfolio3.jpg';

import {
  PortfolioSection,
  PortfolioContainer,
  PortfolioContent,
  PortfolioData,
} from './Style';

export default function Portfolio() {
  return (
    <PortfolioSection id="portfolio">
      <h2>Portfolio</h2>
      <span>Most recent work</span>

      <PortfolioContainer className="swiper-container">
        <div className="swiper-wrapper">
          {/* <!--==================== PORTFOLIO 1 ====================--> */}
          <PortfolioContent className="swiper-slide">
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
          <PortfolioContent className="swiper-slide">
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
          <PortfolioContent className="swiper-slide">
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
        </div>

        {/* <!-- Add Arrows --> */}
        <div className="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>

        {/* <!-- Add Pagination --> */}
        <div className="swiper-pagination"></div>
      </PortfolioContainer>
    </PortfolioSection>
  );
}