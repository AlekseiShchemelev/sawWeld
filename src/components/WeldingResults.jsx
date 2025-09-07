import React from 'react';
import { calculateWeldingParams } from '../utils/weldingCalculations';
import './WeldingResults.css';

const WeldingResults = ({ parameters, onBack }) => {
  const results = calculateWeldingParams(parameters);

  const getEdgeTypeName = (edgeType) => {
    switch(edgeType) {
      case 'parallel': return 'без разделки (|| б/р)';
      case 'v': return 'V-образная (\/)';
      case 'x': return 'X-образная (X)';
      default: return edgeType;
    }
  };

  return (
    <div className="results-container">
      <h2 className="results-header">
        Режимы сварки для {parameters.material === 'carbon' ? 'углеродистой' : 'нержавеющей'} стали
      </h2>
      
      <div className="info-section">
        <div className="wire-info">
          Рекомендуемый диаметр проволоки: {results.wireDiameter} мм
        </div>
        <div className="edge-info">
          Тип разделки: {getEdgeTypeName(results.edgeType)}
        </div>
      </div>
      
      <table className="results-table">
        <thead>
          <tr>
            <th className="table-header">Проход</th>
            <th className="table-header">Сила тока, А</th>
            <th className="table-header">Напряжение, В</th>
            <th className="table-header">Скорость, см/мин</th>
          </tr>
        </thead>
        <tbody>
          {results.passes.map((pass, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : ""}>
              <td className="table-cell">{index + 1}</td>
              <td className="table-cell">{pass.current}</td>
              <td className="table-cell">{pass.voltage}</td>
              <td className="table-cell">{pass.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button className="back-button" onClick={onBack}>
        Вернуться к главной странице
      </button>
    </div>
  );
};

export default WeldingResults;