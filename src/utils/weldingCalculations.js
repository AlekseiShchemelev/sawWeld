// Конфигурация режимов сварки для углеродистой стали
const carbonWeldingConfig = {
  parallel: {
    4: {
      wireDiameter: "3",
      passes: [
        { current: "290-310", voltage: "28-30", speed: "65-70" },
        { current: "340-360", voltage: "30-31", speed: "65-70" },
      ],
    },
    5: {
      wireDiameter: "3",
      passes: [
        { current: "290-310", voltage: "28-30", speed: "60-65" },
        { current: "340-360", voltage: "30-31", speed: "60-65" },
      ],
    },
    6: {
      wireDiameter: "3",
      passes: [
        { current: "300-350", voltage: "28-30", speed: "60-65" },
        { current: "375-425", voltage: "30-31", speed: "60-65" },
      ],
    },
    8: {
      wireDiameter: "3",
      passes: [
        { current: "435-465", voltage: "30-31", speed: "60-65" },
        { current: "485-515", voltage: "30-31", speed: "60-65" },
      ],
    },
    10: {
      wireDiameter: "4",
      passes: [
        { current: "485-515", voltage: "30-31", speed: "60-65" },
        { current: "575-600", voltage: "30-32", speed: "60-65" },
      ],
    },
    12: {
      wireDiameter: "4",
      passes: [
        { current: "585-615", voltage: "30-32", speed: "58-62" },
        { current: "585-615", voltage: "30-32", speed: "58-62" },
      ],
    },
    14: {
      wireDiameter: "4",
      passes: [
        { current: "560-600", voltage: "30-32", speed: "60-65" },
        { current: "730-770", voltage: "32-36", speed: "55-60" },
      ],
    },
  },

  v: {
    16: {
      wireDiameter: "4",
      passes: [
        { current: "600-650", voltage: "33-37", speed: "45-50" },
        { current: "650-700", voltage: "40-42", speed: "43-48" },
        { current: "600-650", voltage: "38-38", speed: "45-50" },
      ],
    },
    18: {
      wireDiameter: "4",
      passes: [
        { current: "600-650", voltage: "33-37", speed: "45-50" },
        { current: "670-720", voltage: "40-42", speed: "43-48" },
        { current: "600-650", voltage: "38-38", speed: "45-50" },
      ],
    },
  },

  x: {
    20: {
      wireDiameter: "4",
      passes: [
        { current: "750-800", voltage: "34-36", speed: "60-65" },
        { current: "800-850", voltage: "34-36", speed: "60-65" },
      ],
    },
    25: {
      wireDiameter: "4",
      passes: [
        { current: "750-850", voltage: "34-36", speed: "60-65" },
        { current: "900-950", voltage: "34-36", speed: "60-65" },
      ],
    },
    30: {
      wireDiameter: "4",
      passes: [
        { current: "880-920", voltage: "32-36", speed: "58-62" },
        { current: "980-1020", voltage: "34-36", speed: "58-62" },
      ],
    },
  },
};

// Конфигурация для нержавеющей стали
const stainlessWeldingConfig = {
  parallel: {
    4: {
      wireDiameter: "3",
      passes: [
        { current: "250-280", voltage: "26-28", speed: "55-60" },
        { current: "300-330", voltage: "28-30", speed: "55-60" },
      ],
    },
    5: {
      wireDiameter: "3",
      passes: [
        { current: "270-300", voltage: "26-28", speed: "55-60" },
        { current: "320-360", voltage: "28-30", speed: "55-60" },
      ],
    },
    6: {
      wireDiameter: "3",
      passes: [
        { current: "300-350", voltage: "28-30", speed: "60-65" },
        { current: "375-425", voltage: "28-30", speed: "60-65" },
      ],
    },
    8: {
      wireDiameter: "3",
      passes: [
        { current: "485-515", voltage: "30-32", speed: "60-65" },
        { current: "485-515", voltage: "30-32", speed: "60-65" },
      ],
    },
    10: {
      wireDiameter: "4",
      passes: [
        { current: "485-515", voltage: "30-32", speed: "60-65" },
        { current: "575-600", voltage: "30-32", speed: "60-65" },
      ],
    },
    12: {
      wireDiameter: "4",
      passes: [
        { current: "585-615", voltage: "30-32", speed: "58-62" },
        { current: "585-615", voltage: "30-32", speed: "58-62" },
      ],
    },
  },

  v: {
    14: {
      wireDiameter: "4",
      passes: [
        { current: "450-500", voltage: "32-34", speed: "45-65" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
      ],
    },
    16: {
      wireDiameter: "4",
      passes: [
        { current: "450-500", voltage: "32-34", speed: "45-65" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
      ],
    },
    18: {
      wireDiameter: "4",
      passes: [
        { current: "450-500", voltage: "32-34", speed: "45-65" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
      ],
    },
  },

  x: {
    20: {
      wireDiameter: "4",
      passes: [
        { current: "450-500", voltage: "32-34", speed: "45-65" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
      ],
    },
    25: {
      wireDiameter: "4",
      passes: [
        { current: "450-500", voltage: "32-34", speed: "45-65" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
      ],
    },
    30: {
      wireDiameter: "4",
      passes: [
        { current: "450-500", voltage: "32-34", speed: "45-65" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
        { current: "550-600", voltage: "32-34", speed: "40-60" },
      ],
    },
  },
};

// Функция для определения типа разделки
const determineEdgeType = (material, thickness) => {
  if (material === "carbon") {
    if (thickness >= 4 && thickness <= 14) return "parallel";
    if (thickness >= 16 && thickness <= 18) return "v";
    if (thickness >= 20) return "x";
  } else {
    if (thickness >= 4 && thickness <= 12) return "parallel";
    if (thickness >= 14 && thickness <= 18) return "v";
    if (thickness >= 20) return "x";
  }
  return "parallel"; // значение по умолчанию
};

// Функция для поиска ближайшей доступной толщины
const findClosestThickness = (thickness, availableThicknesses) => {
  return availableThicknesses.reduce((prev, curr) =>
    Math.abs(curr - thickness) < Math.abs(prev - thickness) ? curr : prev
  );
};

export const calculateWeldingParams = (parameters) => {
  const { material, thickness } = parameters;

  // Автоматически определяем тип разделки
  const edgeType = determineEdgeType(material, thickness);

  let config;

  if (material === "carbon") {
    config = carbonWeldingConfig[edgeType];
  } else {
    config =
      stainlessWeldingConfig[edgeType] || stainlessWeldingConfig.parallel;
  }

  if (!config) {
    return {
      wireDiameter: "3",
      edgeType: "parallel",
      passes: [
        { current: "300-350", voltage: "28-30", speed: "60-65" },
        { current: "350-400", voltage: "30-32", speed: "60-65" },
      ],
    };
  }

  const availableThicknesses = Object.keys(config).map(Number);
  const closestThickness = findClosestThickness(
    thickness,
    availableThicknesses
  );

  const result = config[closestThickness] || {
    wireDiameter: "3",
    passes: [
      { current: "300-350", voltage: "28-30", speed: "60-65" },
      { current: "350-400", voltage: "30-32", speed: "60-65" },
    ],
  };

  // Добавляем информацию о типе разделки в результат
  return {
    ...result,
    edgeType: edgeType,
  };
};
