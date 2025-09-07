import React, { useState } from 'react';
import MaterialSelection from './components/MaterialSelection';
import WeldingResults from './components/WeldingResults';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('selection');
  const [parameters, setParameters] = useState(null);

  const handleCalculate = (params) => {
    setParameters(params);
    setCurrentView('results');
  };

  const handleBack = () => {
    setCurrentView('selection');
  };

  return (
    <div className="App">
      {currentView === 'selection' && (
        <MaterialSelection onCalculate={handleCalculate} />
      )}
      {currentView === 'results' && parameters && (
        <WeldingResults parameters={parameters} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;