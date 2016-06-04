// public/js/controllers/ContactCtrl.js
angular.module('ContactCtrl', [])
.controller('ContactController', function($http, $scope) {

    $scope.subscribe = function (application) {
        return $http.post('/api/subscribe', application);
    };

});
