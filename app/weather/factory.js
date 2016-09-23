angular.module('weatherApp')
    .factory('weatherFactory', ['$http', '$q', function($http, $q) {
        var url;
        function getForecast(location) {
            var deferred = $q.defer();
            if (typeof location === 'number') {
                url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='+location+')&format=json&callback=';
            } else if (typeof location === 'string') {
                url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+location+'")&format=json&callback=';
            }
                $http.get(url)
                .success(function(data) {
                    deferred.resolve(data.query.results.channel);
                })
                .error(function(err) {
                    console.log('Error');
                    deferred.reject(err);
                });
            return deferred.promise;
        }
        return {
            getForecast: getForecast
        };
    }]);