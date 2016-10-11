var apiKey = require('./../.env').apiKey;

Forecast = function() {
}

Forecast.prototype.getForecast = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(city, response.list.dt_txt);
  }).fail(function(error) {
    $('.forecast-display').text(error.responseJSON.message);
  });
}
exports.forecastModule = Forecast;
