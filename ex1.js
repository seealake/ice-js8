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

function generateWeatherReport() {
  const forecastStrings = [];

  for (const dayWeather of dailyWeatherObjects) {
    const tempC = (dayWeather.temps.F - 32) * (5 / 9);
    forecastStrings.push(
      `On ${
        dayWeather.weekday.charAt(0).toUpperCase() + dayWeather.weekday.slice(1)
      } it will be ${
        dayWeather.conditions
      } with a temperature of ${tempC.toFixed(1)} degrees C.`
    );
  }

  let maxTemp = -Infinity;
  let maxDay;

  for (const dayWeather of dailyWeatherObjects) {
    if (dayWeather.temps.F > maxTemp) {
      maxTemp = dayWeather.temps.F;
      maxDay = dayWeather.weekday;
    }
  }

  const maxTempString = `The warmest day will be ${
    maxDay.charAt(0).toUpperCase() + maxDay.slice(1)
  } with a temperature of ${((maxTemp - 32) * (5 / 9)).toFixed(1)} degrees C.`;

  return forecastStrings.join("\n") + "\n" + maxTempString;
}

console.log(generateWeatherReport());