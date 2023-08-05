import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'bootstrap';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
    <div className="col-md-6">
    <h2 className="mb-4">Calculator</h2>
    <form>
    <div className="mb-3">
    <input
    type="text"
    className="form-control"
    placeholder="Enter first number"
    value={num1}
    onChange={(e) => setNum1(e.target.value)}
/>
</div>
<div className="mb-3">
<input
        type="text"
        className="form-control"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        />
        </div>
<div className="mb-3">
   
        <button type="button" className="btn btn-primary" onClick={handleDivide}>
                Divide
        </button>
        <button type="button" className="btn btn-danger mr-2" onClick={handleSubtract}>
                 Subtract
        </button>
        <button type="button" className="btn btn-info mr-2" onClick={handleMultiply}>
                 Multiply
        </button>
        <button type="button" className="btn btn-secondary mr-2" onClick={handleAdd}>
                Add
        </button>
        </div>
        </form>
        {result !== '' && (
         <div className="alert alert-success">{result}</div>
)}
</div>
</div>
</div>
);
};

export default Calculator;
