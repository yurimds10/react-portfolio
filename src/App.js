import React from 'react';
import Header from './Pages/Header/Index';
import Home from './Pages/Home/Index';
import About from './Pages/About/Index';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
      </main>
    </div>
  );
}