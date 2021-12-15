import React from "react";
import Photo from "../../Assets/Img/photo.png"

import {
  HomeSection,
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeImg,
} from './Style'

export default function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
          <a href="https://www.linkedin.com/in/yuri-ricardo-mendes-b34753214/" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a href="https://www.github.com/YuriMendess" target="_blank">
            <i className="uil uil-github-alt"></i>
          </a>

          <a href="https://www.instagram.com/yuri.dev" target="_blank">
            <i className="uil uil-instagram"></i>
          </a>
          </HomeSocial>
          <HomeImg>
          <svg className="home-blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            </mask>
            <g mask="url(#mask0)">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            <img src={Photo} className="home__blob-img" x='12' y='0'/>
            </g>
          </svg>
          </HomeImg>
        </HomeContent>
      </HomeContainer>
    </HomeSection>
  )
}