import React from 'react';
import Header from './Pages/Header/Index';
import Home from './Pages/Home/Index';
import About from './Pages/About/Index';
import Skills from './Pages/Skills/Index';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
      </main>
    </div>
  );
}