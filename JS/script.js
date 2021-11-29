let weather = {
  apiKey: "ce23df9993022bcc0de19bafae0815b5",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        " &units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather [0];
      const { temp, humidity, temp_min, temp_max, feels_like } = data.main;
    const { speed } = data.wind;
    const { cod } = data;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".temp-min").innerText = "Minimum Temperature: " + temp_min + "°C";
      document.querySelector(".temp-max").innerText = "Maximum Temperature: " + temp_max + "°C";
      document.querySelector(".feels-like").innerText = "Perceived Temperature: " + feels_like + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed " + speed + "km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);

  },
};

document.querySelector(".search").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });



weather.fetchWeather("Palermo");
