// Утилитарные функции для расчета параметров сварки
export const calculateWeldingParams = (parameters) => {
  let current1, current2, voltage1, voltage2, speed1, speed2;
  
  if (parameters.material === 'carbon') {
     if (parameters.thickness === 4 || parameters.thickness === 5) {
      current1 = '300-350'; voltage1 = '28.5-29.5'; speed1 = '60-65';
      current2 = '375-425'; voltage2 = '30-31'; speed2 = '60-65';
    } 
    else if (parameters.thickness === 6) {
      current1 = '300-350'; voltage1 = '28.5-29.5'; speed1 = '60-65';
      current2 = '375-425'; voltage2 = '30-31'; speed2 = '60-65';
    }
    else if (parameters.thickness === 8) {
      current1 = '370-400'; voltage1 = '32-34'; speed1 = '50-55';
      current2 = '385-425'; voltage2 = '32-34'; speed2 = '50-55';
    } 
    else if (parameters.thickness === 10) {
      current1 = '485-515'; voltage1 = '30-31'; speed1 = '60-65';
      current2 = '575-600'; voltage2 = '30-32'; speed2 = '60-65';
    } 
    else if (parameters.thickness === 12) {
      current1 = '585-615'; voltage1 = '30-32'; speed1 = '58-62';
      current2 = '585-615'; voltage2 = '30-32'; speed2 = '58-62';
    }
    else if (parameters.thickness === 16) {
      current1 = '585-615'; voltage1 = '30-32'; speed1 = '58-62';
      current2 = '585-615'; voltage2 = '30-32'; speed2 = '58-62';
    }
  }
  
  return {
    pass1: {
      current: current1,
      voltage: voltage1,
      speed: speed1
    },
    pass2: {
      current: current2,
      voltage: voltage2,
      speed: speed2
    }
  };
};