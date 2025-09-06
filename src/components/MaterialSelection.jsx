import React, { useState } from 'react';
import styles from './MaterialSelection.css';

const MaterialSelection = ({ onCalculate }) => {
  const [material, setMaterial] = useState('');
  const [thickness, setThickness] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ material, thickness: parseInt(thickness) });
  };

  const thicknessOptions = [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30];

  return (
    <div className={styles.container}>
      <h1>Подбор режимов сварки</h1>
      
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Тип материала:</label>
          <select 
            value={material} 
            onChange={(e) => setMaterial(e.target.value)}
            required
            className={styles.select}
          >
            <option value="">-- Выберите материал --</option>
            <option value="carbon">Углеродистые стали (09Г2С, Ст3 и т.п.)</option>
            <option value="stainless">Нержавеющие стали (12Х18Н10Т, Aisi 304L и т.п.)</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Толщина основного металла (мм):</label>
          <select 
            value={thickness} 
            onChange={(e) => setThickness(e.target.value)}
            className={styles.select}
          >
            {thicknessOptions.map(option => (
              <option key={option} value={option}>
                {option} мм
              </option>
            ))}
          </select>
        </div>
        
        <div className={styles.infoText}>
          <strong>Тип разделки определяется автоматически:</strong><br/>
          {material === 'carbon' ? 
            '4-14 мм: без разделки, 16-18 мм: V-образная, 20+ мм: X-образная' :
            '4-12 мм: без разделки, 14-18 мм: V-образная, 20+ мм: X-образная'
          }
        </div>
        
        <button 
          type="submit" 
          disabled={!material}
          className={material ? styles.button : `${styles.button} ${styles.buttonDisabled}`}
        >
          Подобрать режимы сварки
        </button>
      </form>
    </div>
  );
};

export default MaterialSelection;