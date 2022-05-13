import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Homepage from './pages/Home';
import Quotes from './pages/Quotes';
import Header from './pages/Header';

const app = () => (
  <>
    <div className="app">
      <div>
        <Header />
        <Routes>
          <Route path="calculator" element={<Calculator />} />
          <Route path="/" element={<Homepage />} />
          <Route path="quote" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  </>
);
export default app;
