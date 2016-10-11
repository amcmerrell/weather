var apiKey = require('./../.env').apiKey;

Temperature = function(){
}

Temperature.prototype.getTemperature = function(city, units, displayFunction) {
  var scale;
  if (units === "metric") {
    scale = "Celsius";
  } else if (units === "imperial") {
    scale = "Farenheit";
  } else {
    scale = "Kelvin";
  }
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=' + units + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, scale, response.main.temp);
  }).fail(function(error) {
    $('.temperature-display').text(error.responseJSON.message);
  });
}

exports.temperatureModule = Temperature;
