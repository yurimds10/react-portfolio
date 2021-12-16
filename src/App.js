import React from 'react';
import Header from './Pages/Header/Index';
import Home from './Pages/Home/Index';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
      </main>
    </div>
  );
}