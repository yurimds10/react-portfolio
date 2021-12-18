import React from 'react';
import Header from './Template/Header/Index';
import Home from './Template/Home/Index';
import About from './Template/About/Index';
import Skills from './Template/Skills/Index';
import Services from './Template/Services-/Index';
import Portfolio from './Template/Portfolio/Index';
import Contact from './Template/Contact/Index';
import Footer from './Template/Footer/Index';

export default function App() {
  return (
    <div>
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