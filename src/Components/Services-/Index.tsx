import React from 'react';
import { Subtitle } from '../Subtitle/Subtitle';
import { Title } from '../Title/Title';
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

export default function Services(): JSX.Element {

  return (
    <ServicesSection id="services">
      <Title>Services</Title>
      <Subtitle>What I offer</Subtitle>
      <ServicesContainer>
        <ServicesContent>
          <div>
            <ServicesIcon className="uil uil-arrow"></ServicesIcon>
            <ServicesTitle>Website <br/> Development</ServicesTitle>
          </div>

          <ServicesButton>
            View More
            <i className="uil uil-arrow-right"></i>
          </ServicesButton>

          <ServicesModal>
            <ServicesModalContent>
              <ServicesModalTitle>Website <br/> Development</ServicesModalTitle>
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
