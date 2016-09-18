angular.module('weatherApp')
    .controller('mainCtrl', ['weatherFactory', function(weatherFactory) {

        var that = this;

        that.conditions = [
            'wi-tornado', 'wi-storm-showers', 'wi-hurricane', 'wi-thunderstorm', 'wi-thunderstorm', 'wi-rain-mix',
            'wi-rain-mix', 'wi-sleet', 'wi-sleet', 'wi-raindrops', 'wi-sleet', 'wi-showers',
            'wi-showers', 'wi-snow', 'wi-snow', 'wi-snow-wind', 'wi-snow', 'wi-hail', 'wi-sleet', 'wi-dust',
            'wi-fog', 'wi-day-haze', 'wi-smoke', 'wi-strong-wind', 'wi-windy', 'wi-snowflake-cold', 'wi-cloudy',
            'wi-night-cloudy', 'wi-day-cloudy', 'wi-night-partly-cloudy', 'wi-day-sunny-overcast', 'wi-night-clear',
            'wi-day-sunny', 'wi-night-clear', 'wi-day-sunny', 'wi-rain-mix', 'wi-hot', 'wi-thunderstorm', 'wi-thunderstorm',
            'wi-thunderstorm', 'wi-showers', 'wi-snow', 'wi-snow', 'wi-snow', 'wi-cloud', 'wi-storm-showers',
            'wi-snow', 'wi-storm-showers'
        ];

        that.data = [];

        that.getForecast = function(zip) {
            that.zip = '';
            weatherFactory.getForecast(zip).then(function(data) {
                that.data.push(data);
                console.log(that.data);
            });
        };

    }]);