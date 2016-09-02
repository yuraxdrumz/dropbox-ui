(function() {
  'use strict';

  angular
    .module('eternitech')
    .factory('getData',['$http', function($http){
        var get = function(){
            var url = "images.json"
            return $http.get(url).success(function(data){
                return data
            }).catch(function(err){
                return err
            })
        };
        return {
            get:get
        }
    }])

})();
