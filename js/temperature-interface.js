var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTemperature = function(city, scale, temperatureData) {
  $('.temperature-display').text("The temperature in " + city + " is " + temperatureData + " " + scale);
}


  var currentTemperatureObject = new Temperature();
  $('#temperature-location').click(function() {
    var city = $('#location').val();
    var units = $('#units').val();
    $('#location').val("");
    currentTemperatureObject.getTemperature(city, units, displayTemperature);
  });
