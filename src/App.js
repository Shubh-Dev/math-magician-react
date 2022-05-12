import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Homepage from './pages/Home';
import Quotes from './pages/Quotes';

const app = () => (
  <div className="app">
    <div>
      <header>
        <Routes>
          <Route path="calculator" elements={<Calculator />} />
          <Route path="/" elements={<Homepage />} />
          <Route path="quote" elements={<Quotes />} />
        </Routes>
      </header>
    </div>
  </div>
);
export default app;
