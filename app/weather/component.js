angular.module('weatherApp')
    .component('forecast', {
        templateUrl: 'weather/forecast.html',
        controller: 'mainCtrl',
        bindings: {
            data: '=',
            conditions: '='
        }
    });