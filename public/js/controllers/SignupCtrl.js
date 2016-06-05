// public/js/controllers/SignupCtrl.js
angular.module('SignupCtrl', [])
.controller('SignupController', function($http, $scope) {

    $scope.isSuccess = false;
    $scope.button_text = "Apply";
    $scope.apply = function (application) {
        if (application.first_name &&
            application.last_name &&
            application.email &&
            application.concentration &&
            application.first_choice &&
            application.second_choice &&
            application.third_choice &&
            application.class &&
            application.reason &&
            application.background) {
                $scope.isSuccess = true;
                $scope.button_text = "Submitted";
                return $http.post('/api/signup', application);
            }
    };

});
