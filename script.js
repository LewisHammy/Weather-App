const apiKey = "543002caf9995f9afabb7a2283601613";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const userSearch = document.querySelector(".search input");
const userSearchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
    document.querySelector(".weather").style.display = "block";

}

userSearchBtn.addEventListener("click", ()=>{
    checkWeather(userSearch.value);
})

function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "543002caf9995f9afabb7a2283601613"; 
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apiKey;

    $.getJSON(apiUrl, function(data) {
      var forecast = data.list;
      var forecastHtml = "";

      for (var i = 0; i < forecast.length; i += 8) {
        var date = new Date(forecast[i].dt * 1000);
        var day = date.toLocaleDateString("en-US", { weekday: 'long' });
        var temp = forecast[i].main.temp_max;

        forecastHtml += "<p>" + day + ": " + temp + "°F</p>";
      }

      document.getElementById("forecast").innerHTML = forecastHtml;
    });
  }
