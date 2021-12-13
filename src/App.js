import React from 'react';
import Header from './Pages/Header/Index'
import Home from './Pages/Home/Index'
import About from './Pages/About/Index'
import Portfolio from './Pages/Portfolio/Index';
import Skills from './Pages/Skills/Index';
import Contact from './Pages/Contact/Index';
import Footer from './Pages/Footer/Index';
import Scroll from './Components/Scroll';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>
      <Scroll/>
    </div>
  );
}

export default App;
