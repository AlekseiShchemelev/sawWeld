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
    <div className={styles.container}>
      <h2 className={styles.header}>
        Режимы сварки для {parameters.material === 'carbon' ? 'углеродистой' : 'нержавеющей'} стали
      </h2>
      
      <div className={styles.infoSection}>
        <div className={styles.wireInfo}>
          Рекомендуемый диаметр проволоки: {results.wireDiameter} мм
        </div>
        <div className={styles.edgeInfo}>
          Тип разделки: {getEdgeTypeName(results.edgeType)}
        </div>
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Проход</th>
            <th className={styles.tableHeader}>Сила тока, А</th>
            <th className={styles.tableHeader}>Напряжение, В</th>
            <th className={styles.tableHeader}>Скорость, см/мин</th>
          </tr>
        </thead>
        <tbody>
          {results.passes.map((pass, index) => (
            <tr key={index} className={index % 2 === 0 ? styles.evenRow : ''}>
              <td className={styles.tableCell}>{index + 1}</td>
              <td className={styles.tableCell}>{pass.current}</td>
              <td className={styles.tableCell}>{pass.voltage}</td>
              <td className={styles.tableCell}>{pass.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button className={styles.backButton} onClick={onBack}>
        Вернуться к главной странице
      </button>
    </div>
  );
};

export default WeldingResults;