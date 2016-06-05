// public/js/controllers/ProjectsCtrl.js
angular.module('ProjectsCtrl', [])
.controller('ProjectsController', ['$scope', function($scope) {

    $scope.init = function () {
        scrollToProjects();
    }

}]);
