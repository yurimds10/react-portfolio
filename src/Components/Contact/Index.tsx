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
} from './Style';

export default function Contact(): JSX.Element {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <span>Get in touch</span>
      <ContactContainer>
        <div>
          <ContactInformation>
            <i className="uil uil-phone"></i>
    
            <div>
              <h3>Telegram</h3>
              <span>+55 (15) 99637-8881</span>
            </div>
          </ContactInformation>
    
          <ContactInformation>
            <i className="uil uil-envelope"></i>
    
            <div>
              <h3>Email</h3>
              <span>contato.yurimendess@gmail.com</span>
            </div>
          </ContactInformation>
        </div>
                     
        <ContactForm action="">
          <ContactInputs>
            <ContactContent>
              <ContactLabel >Name</ContactLabel>
              <ContactInput type="text"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel >Email</ContactLabel>
              <ContactInput type="email"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel >Project</ContactLabel>
              <ContactInput type="text"/>
            </ContactContent>

            <ContactContent>
              <ContactLabel >Message</ContactLabel>
              <ContactTextArea name="message" id="message" cols={0} rows={0}></ContactTextArea>
            </ContactContent>

            <div>
              <ContactButton>
                Send Message
                <i className="uil uil-message"></i>
              </ContactButton>
            </div>
          </ContactInputs>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}