import React from "react";

import {
  ServicesSection,
  ServicesContainer,
  ServicesTitle,
  ServicesIcon,
  ServicesButton,
  ServicesContent,
  ServicesModal,
  ServicesModalContent,
  ServicesModalTitle,
  ServicesModalClose,
  ServicesModalServices,
  ServicesModalService

} from './Style';

export default function Services() {
  return (
    <ServicesSection id="services">
      <h2>Services</h2>
      <span>What I offer</span>
      <ServicesContainer>

        <ServicesContent>
          <div>
            <ServicesIcon className="uil uil-arrow"></ServicesIcon>
            <ServicesTitle>Frontend <br/> Developer</ServicesTitle>
          </div>

          <ServicesButton onClick={() => console.log(`Services Section ok!`)}>
            View More
            <i className="uil uil-arrow-right"></i>
          </ServicesButton>

          <ServicesModal>
            <ServicesModalContent>
              <ServicesModalTitle>Front-end <br/> Development</ServicesModalTitle>
              <ServicesModalClose className="uil uil-times"/>

              <ServicesModalServices>
                <ServicesModalService>
                  <i className="uil uil-check-circle"></i>
                  <p>I develop the user interface.</p>
                </ServicesModalService>

                <ServicesModalService>
                  <i className="uil uil-check-circle"></i>
                  <p>Web page development.</p>
                </ServicesModalService>

                <ServicesModalService>
                  <i className="uil uil-check-circle"></i>
                  <p>I create ux element interactions.</p>
                </ServicesModalService>

                <ServicesModalService>
                  <i className="uil uil-check-circle"></i>
                  <p>I position your company brand.</p>
                </ServicesModalService>

              </ServicesModalServices>
            </ServicesModalContent>
          </ServicesModal>
        </ServicesContent>
        
      </ServicesContainer>
    </ServicesSection>
  )
}
