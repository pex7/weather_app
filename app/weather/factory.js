angular.module('weatherApp')
    .factory('weatherFactory', ['$http', '$q', function($http, $q) {
        function getForecast(zip) {
            var deferred = $q.defer();
            $http.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='+zip+')&format=json&callback=')
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