import React from "react";
import {ReactComponent as HomeSvg} from '../../Assets/Img/image.svg';

import {
  HomeSection,
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeImg,
  HomeData,
  HomeTitle,
  HomeSubtitle,
  HomeDescription,
  HomeButton,
  HomeScroll,
  HomeScrollButton,
} from './Style'

export default function Home() {
  return (
    <HomeSection id="home">
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
            <a href="https://www.linkedin.com/in/yuri-ricardo-mendes-b34753214/" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.github.com/YuriMendess" target="_blank" rel="noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/yuri.dev" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i>
            </a>
          </HomeSocial>
          <HomeImg>
            <HomeSvg/>
          </HomeImg>

          <HomeData>
            <HomeTitle>Hi, I'am Yuri!</HomeTitle>
            <HomeSubtitle>Front-end Developer</HomeSubtitle>
            <HomeDescription>
              High level experience in web design and development knowledge, producing quality work.
            </HomeDescription>
            <HomeButton href="#contact">
              Contact Me <i className="uil uil-message"/>
            </HomeButton>
          </HomeData>
        </HomeContent>

        <HomeScroll>
          <HomeScrollButton>
            <i className="uil uil-mouse-alt mouse"></i>
            <span>Scroll down</span>
            <i className="uil uil-arrow-down arrow"></i>
          </HomeScrollButton>
        </HomeScroll>
      </HomeContainer>
    </HomeSection>
  )
}