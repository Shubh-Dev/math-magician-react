import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => { 

  handleClicks(e) {
    const Target = e.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, Target));
  };
    return (
      <div className="container">
        <div className="display-area">
          
        </div>
        <button onClick={this.handleClicks} type="button" value="AC">AC</button>
        <button onClick={this.handleClicks} type="button" value="+/-">+/-</button>
        <button onClick={this.handleClicks} type="button" value="%">%</button>
        <button onClick={this.handleClicks} type="button" className="orange" value="÷">÷</button>
        <button onClick={this.handleClicks} type="button" value="7">7</button>
        <button onClick={this.handleClicks} type="button" value="8">8</button>
        <button onClick={this.handleClicks} type="button" value="9">9</button>
        <button onClick={this.handleClicks} type="button" className="orange" value="x">x</button>
        <button onClick={this.handleClicks} type="button" value="4">4</button>
        <button onClick={this.handleClicks} type="button" value="5">5</button>
        <button onClick={this.handleClicks} type="button" value="6">6</button>
        <button onClick={this.handleClicks} type="button" className="orange" value="-">-</button>
        <button onClick={this.handleClicks} type="button" value="1">1</button>
        <button onClick={this.handleClicks} type="button" value="2">2</button>
        <button onClick={this.handleClicks} type="button" value="3">3</button>
        <button onClick={this.handleClicks} type="button" className="orange" value="+">+</button>
        <button onClick={this.handleClicks} type="button" className="large-btn" value="0">0</button>
        <button onClick={this.handleClicks} type="button" value=".">.</button>
        <button onClick={this.handleClicks} type="button" className="orange" value="=">=</button>
      </div>
    );
  }
export default Calculator;
