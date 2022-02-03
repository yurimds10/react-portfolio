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
} from './Style';

import {ReactComponent as Img} from '../../Assets/Img/home_image.svg';

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
            <Img/>
          </HomeImg>

          <HomeData>
            <HomeTitle>Olá, Yuri aqui!</HomeTitle>
            <HomeSubtitle>Front-end Developer</HomeSubtitle>
            <HomeDescription>
              Estudante de Desenvolvimento Web e apaixonado por Tecnologia.
            </HomeDescription>
            <HomeButton href="#contact">
              Contato <i className="uil uil-message"/>
            </HomeButton>
          </HomeData>
        </HomeContent>
      </HomeContainer>
    </HomeSection>
  )
}