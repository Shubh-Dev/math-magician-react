import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({ total: 0, next: null, operation: null });
  const handleClicks = (e) => {
    setResult(calculate(result, e.target.value));
  };

  const { total, next, operation } = result;
  return (
    <div className="container">
      <div className="display-area">
        {total}
        {operation}
        {next}
      </div>
      <button onClick={handleClicks} type="button" value="AC">AC</button>
      <button onClick={handleClicks} type="button" value="+/-">+/-</button>
      <button onClick={handleClicks} type="button" value="%">%</button>
      <button onClick={handleClicks} type="button" className="orange" value="÷">÷</button>
      <button onClick={handleClicks} type="button" value="7">7</button>
      <button onClick={handleClicks} type="button" value="8">8</button>
      <button onClick={handleClicks} type="button" value="9">9</button>
      <button onClick={handleClicks} type="button" className="orange" value="x">x</button>
      <button onClick={handleClicks} type="button" value="4">4</button>
      <button onClick={handleClicks} type="button" value="5">5</button>
      <button onClick={handleClicks} type="button" value="6">6</button>
      <button onClick={handleClicks} type="button" className="orange" value="-">-</button>
      <button onClick={handleClicks} type="button" value="1">1</button>
      <button onClick={handleClicks} type="button" value="2">2</button>
      <button onClick={handleClicks} type="button" value="3">3</button>
      <button onClick={handleClicks} type="button" className="orange" value="+">+</button>
      <button onClick={handleClicks} type="button" className="large-btn" value="0">0</button>
      <button onClick={handleClicks} type="button" value=".">.</button>
      <button onClick={handleClicks} type="button" className="orange" value="=">=</button>
    </div>
  );
};
export default Calculator;
