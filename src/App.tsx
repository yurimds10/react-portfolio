import React from 'react';
import Header from './Components/Header/Index';
import Home from './Components/Home/Index';
import About from './Components/About/Index';
import Skills from './Components/Skills/Index';
import Portfolio from './Components/Portfolio/Index';
import Contact from './Components/Contact/Index';
import Footer from './Components/Footer/Index';

export default function App():JSX.Element {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
