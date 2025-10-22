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
    // round to one decimal place for nicer output
    const displayTemp = Math.round(temp * 10) / 10;
    forecastStrings.push(
      `On ${dayWeather.weekday} it will be ${dayWeather.conditions} with a temperature of ${displayTemp} degrees ${tempUnit}.`
    );
  }

  let maxTemp = -Infinity;
  let maxDay;

  for (const dayWeather of dailyWeatherObjects) {
    let temp = dayWeather.temps.F;
    if (shouldCelsius) {
      temp = (dayWeather.temps.F - 32) * (5 / 9);
    }
    // compare the converted temperature
    if (temp > maxTemp) {
      maxTemp = temp;
      maxDay = dayWeather.weekday;
    }
  }

  let tempUnit = "F";
  if (shouldCelsius) {
    tempUnit = "C";
  }
  forecastStrings.push(
    `The warmest day will be ${maxDay} with a temperature of ${Math.round(maxTemp * 10) / 10} degrees ${tempUnit}.`
  );

  // compute average using converted temperatures
  let sum = 0;
  for (const dayWeather of dailyWeatherObjects) {
    let t = dayWeather.temps.F;
    if (shouldCelsius) {
      t = (t - 32) * (5 / 9);
    }
    sum += t;
  }
  const averageTemp = sum / dailyWeatherObjects.length;
  forecastStrings.push(
    `The average temperature next week will be ${Math.round(averageTemp * 10) / 10} degrees ${tempUnit}.`
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