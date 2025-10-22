const dailyWeatherObjects = [
  {
    weekday: "sunday",
    temps: {
      F: 45,
    },
    conditions: "cloudy",
  },
  {
    weekday: "monday",
    temps: {
      F: 50,
    },
    conditions: "sunny",
  },
  {
    weekday: "tuesday",
    temps: {
      F: 53,
    },
    conditions: "sunny",
  },
  {
    weekday: "wednesday",
    temps: {
      F: 52,
    },
    conditions: "partly cloudy",
  },
  {
    weekday: "thursday",
    temps: {
      F: 48,
    },
    conditions: "cloudy",
  },
  {
    weekday: "friday",
    temps: {
      F: 42,
    },
    conditions: "sunny",
  },
  {
    weekday: "saturday",
    temps: {
      F: 40,
    },
    conditions: "partly cloudy",
  },
];

function generateWeatherReport(shouldCelsius) {
  const forecastStrings = [];

  for (const dayWeather of dailyWeatherObjects) {
    let temp = dayWeather.temps.F;
    let tempUnit = "F";
    if (shouldCelsius) {
      temp = (dayWeather.temps.F - 32) * (5 / 9);
      tempUnit = "C";
    }
    forecastStrings.push(
      `On ${dayWeather.weekday} it will be ${dayWeather.conditions} with a temperature of ${temp} degrees ${tempUnit}.`
    );
  }

  let maxTemp = -Infinity;
  let maxDay;

  for (const dayWeather of dailyWeatherObjects) {
    let temp = dayWeather.temps.F;
    if (shouldCelsius) {
      temp = (dayWeather.temps.F - 32) * (5 / 9);
    }
    if (dayWeather.temps.F > maxTemp) {
      maxTemp = temp;
      maxDay = dayWeather.weekday;
    }
  }

  let tempUnit = "F";
  if (shouldCelsius) {
    tempUnit = "C";
  }
  forecastStrings.push(
    `The warmest day will be ${maxDay} with a temperature of ${maxTemp} degrees ${tempUnit}.`
  );

  let sum = 0;
  for (let i = 0; i < dailyWeatherObjects.length - 1; i++) {
    sum += dailyWeatherObjects[i].temp;
  }
  const averageTemp = sum / 7;
  forecastStrings.push(
    `The average temperature next week will be ${averageTemp} degrees ${tempUnit}.`
  );

  return forecastStrings;
}

function renderWeather() {
  const forecastNode = document.getElementById("forecast-output");

  const forecastStrings = generateWeatherReport(false);
  for (const forecastString of forecastStrings) {
    const node = document.createElement("p");
    node.innerText = forecastString;
    forecastNode.appendChild(node);
  }
}

function clearPreviousWeather() {
  const forecastNode = document.getElementById("forecast-output");
  while (forecastNode.lastChild) {
    forecastNode.removeChild(forecastNode.lastChild);
  }
}