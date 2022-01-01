import React from 'react';
import Header from './Components/Header/Index';
import Home from './Components/Home/Index';
import About from './Components/About/Index';
import Skills from './Components/Skills/Index';
import Services from './Components/Services-/Index';
import Portfolio from './Components/Portfolio/Index';
import Contact from './Components/Contact/Index';
import Footer from './Components/Footer/Index';
import { GlobalStyle } from './Styles/GlobalStyle';

export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}