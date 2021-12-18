import React from "react";

import {
  ServicesSection,
  ServicesContainer,
  ServicesContent,

} from './Style';

export default function Services() {
  return (
    <ServicesSection>
      <h2>Services</h2>
      <span>What I offer</span>
      <ServicesContainer>

        <ServicesContent>
          <div>
            <i className="uil uil-arrow"></i>
            <h3>Frontend <br/> Developer</h3>
          </div>

          <span>
            View More
            <i className="uil uil-arrow-right"></i>
          </span>
        </ServicesContent>
      </ServicesContainer>
    </ServicesSection>
  )
}
