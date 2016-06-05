// public/js/controllers/ContactCtrl.js
angular.module('ContactCtrl', [])
.controller('ContactController', function($http, $scope) {

    $scope.isSuccess = false;
    $scope.button_text = "Sign up";

    $scope.subscribe = function (application) {
        if (application.first_name &&
            application.last_name &&
            application.email) {
                $scope.isSuccess = true;
                $scope.button_text = "Subscribed";
                return $http.post('/api/subscribe', application);
            }
    };

    $scope.init = function () {
        scrollToTop();
    }



});
