import React, { useState } from 'react';
import './MaterialSelection.css';

const MaterialSelection = ({ onCalculate }) => {
  const [material, setMaterial] = useState('');
  const [thickness, setThickness] = useState(4);
  const [edgeType, setEdgeType] = useState('parallel');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ material, thickness, edgeType });
  };

  return (
    <div className="container">
      <h1>Подбор режимов сварки</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="materialType">Тип материала:</label>
          <select 
            id="materialType" 
            value={material} 
            onChange={(e) => setMaterial(e.target.value)}
            required
          >
            <option value="">-- Выберите материал --</option>
            <option value="carbon">Углеродистые стали (09Г2С, Ст3 и т.п.)</option>
            <option value="stainless">Нержавеющие стали (12Х18Н10Т, Aisi 304L и т.п.)</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="thickness">Толщина основного металла: {thickness} мм</label>
          <input 
            type="range" 
            id="thickness" 
            min="4" 
            max="40" 
            value={thickness} 
            onChange={(e) => setThickness(parseInt(e.target.value))}
          />
        </div>
        
        <div className="form-group">
          <label>Разделка кромок:</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                value="parallel" 
                checked={edgeType === 'parallel'} 
                onChange={() => setEdgeType('parallel')} 
              />
              || б/р
            </label>
            <label>
              <input 
                type="radio" 
                value="v" 
                checked={edgeType === 'v'} 
                onChange={() => setEdgeType('v')} 
              />
              \/
            </label>
            <label>
              <input 
                type="radio" 
                value="x" 
                checked={edgeType === 'x'} 
                onChange={() => setEdgeType('x')} 
              />
              X
            </label>
          </div>
        </div>
        
        <button type="submit" disabled={!material}>
          Перейти к режимам сварки
        </button>
      </form>
    </div>
  );
};

export default MaterialSelection;