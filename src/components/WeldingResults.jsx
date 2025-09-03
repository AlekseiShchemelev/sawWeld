import React from 'react';
import { calculateWeldingParams } from '../utils/weldingCalculations';
import './WeldingResults.css';

const WeldingResults = ({ parameters, onBack }) => {
  const results = calculateWeldingParams(parameters);

  return (
   <div className="container">
      <h2>Режимы сварки для толщины {parameters.thickness} мм</h2>
      
      <div className="results">
        <div className="pass-section">
          <h3>Первый проход</h3>
          <div className="result-item">
            <h4>Сила тока, А</h4>
            <p>{results.pass1.current}</p>
          </div>
          
          <div className="result-item">
            <h4>Напряжение, В</h4>
            <p>{results.pass1.voltage}</p>
          </div>
          
          <div className="result-item">
            <h4>Скорость сварки, см/мин</h4>
            <p>{results.pass1.speed}</p>
          </div>
        </div>

        <div className="pass-section">
          <h3>Второй проход</h3>
          <div className="result-item">
            <h4>Сила тока, А</h4>
            <p>{results.pass2.current}</p>
          </div>

           <div className="result-item">
            <h4>Напряжение, В</h4>
            <p>{results.pass2.voltage}</p>
          </div>
          
          <div className="result-item">
            <h4>Скорость сварки, см/мин</h4>
            <p>{results.pass2.speed}</p>
          </div>
        </div>
      </div>
      
      <button className="back-btn" onClick={onBack}>
        Вернуться к главной странице
      </button>
    </div>
  );
};

export default WeldingResults;