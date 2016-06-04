// public/js/controllers/SignupCtrl.js
angular.module('SignupCtrl', [])
.controller('SignupController', ['$scope', function($http, $scope, Signup) {

    $scope.apply = function (application) {
        return $http.post('/api/signup', application);
    };

}]);
