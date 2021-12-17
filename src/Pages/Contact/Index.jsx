import React from "react";

import {
  ContactSection,
  ContactContainer,
  ContactInformation,
  ContactForm,
  ContactInputs,
  ContactContent,
  ContactLabel,
  ContactInput,
  ContactTextArea,
  ContactButton,
} from './Style'

export default function Contact() {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <span>Get in touch</span>
      <ContactContainer>
        <div>
          <ContactInformation>
            <i class="uil uil-phone"></i>
    
            <div>
              <h3>Telegram</h3>
              <span>+55 (15) 99637-8881</span>
            </div>
          </ContactInformation>
    
          <ContactInformation>
            <i class="uil uil-envelope"></i>
    
            <div>
              <h3>Email</h3>
              <span>contato.yurimendess@gmail.com</span>
            </div>
          </ContactInformation>
        </div>
                     
        <ContactForm action="">
          <ContactInputs>
            <ContactContent>
              <ContactLabel for="">Name</ContactLabel>
              <ContactInput type="text"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel for="">Email</ContactLabel>
              <ContactInput type="email"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel for="">Project</ContactLabel>
              <ContactInput type="text"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel for="">Message</ContactLabel>
              <ContactTextArea name="" id="" cols="0" rows="7"></ContactTextArea>
            </ContactContent>

            <div>
              <ContactButton>
                Send Message
                <i class="uil uil-message"></i>
              </ContactButton>
            </div>
          </ContactInputs>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}