import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <input type="text" value={result} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('C')} className="button">C</button>
        <button onClick={() => handleClick('←')} className="button">←</button>
        <button onClick={() => handleClick('/')} className="button">/</button>
        <button onClick={() => handleClick('*')} className="button">*</button>
        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('-')} className="button">-</button>
        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('+')} className="button">+</button>
        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={() => handleClick('=')} className="button">=</button>
        <button onClick={() => handleClick('0')} className="button">0</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
