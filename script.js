let weather = {
  apiKey: "0beab466a1aaec66e02036ddf05b83db",
  fetchWeather: function () {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=0beab466a1aaec66e02036ddf05b83db"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
