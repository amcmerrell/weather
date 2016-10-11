var Forecast = require('./../js/forecast.js').forecastModule;

var displayDates = function(city, forecastDates) {
  $('.forecast-display').text(forecastDates);
};

var currentForecastObject = new Forecast();
$('#forecast-location').click(function() {
  var city = $('#location').val();
  $('#location').val("");
  currentForecastObject.getForecast(city, displayDates);
});
