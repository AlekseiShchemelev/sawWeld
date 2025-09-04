import React from 'react';
import { calculateWeldingParams } from '../utils/weldingCalculations';
import styles from './WeldingResults.css';

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
    <div style={styles.container}>
      <h2 style={styles.header}>
        Режимы сварки для {parameters.material === 'carbon' ? 'углеродистой' : 'нержавеющей'} стали
      </h2>
      
      <div style={styles.infoSection}>
        <div style={styles.wireInfo}>
          Рекомендуемый диаметр проволоки: {results.wireDiameter} мм
        </div>
        <div style={styles.edgeInfo}>
          Тип разделки: {getEdgeTypeName(results.edgeType)}
        </div>
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Проход</th>
            <th style={styles.tableHeader}>Сила тока, А</th>
            <th style={styles.tableHeader}>Напряжение, В</th>
            <th style={styles.tableHeader}>Скорость, см/мин</th>
          </tr>
        </thead>
        <tbody>
          {results.passes.map((pass, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : {}}>
              <td style={styles.tableCell}>{index + 1}</td>
              <td style={styles.tableCell}>{pass.current}</td>
              <td style={styles.tableCell}>{pass.voltage}</td>
              <td style={styles.tableCell}>{pass.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button style={styles.backButton} onClick={onBack}>
        Вернуться к главной странице
      </button>
    </div>
  );
};

export default WeldingResults;