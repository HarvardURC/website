// public/js/services/SingupService.js
angular.module('SignupService', []).factory('Signup', ['$http', function($http) {

    this.apply = function(application) {
        return $http.post('/api/signup', application);
    };

}]);
