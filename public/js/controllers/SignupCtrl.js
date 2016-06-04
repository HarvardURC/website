// public/js/controllers/SignupCtrl.js
angular.module('SignupCtrl', [])
.controller('SignupController', function($http, $scope) {

    $scope.apply = function (application) {
        return $http.post('/api/signup', application);
    };

});
