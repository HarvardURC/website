// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', [])
.controller('MainController', ['$scope', '$window', function($scope, $window) {
    if ($window.innerWidth < 768){
        $scope.includeMobileTemplate = true;
    } else {
        $scope.includeMobileTemplate = false;
    }


    $(window).on("resize.doResize", function (){

      $scope.$apply(function(){
          if (window.innerWidth < 768){
              $scope.includeMobileTemplate = true;
          } else {
              $scope.includeMobileTemplate = false;
          }
      });
      console.log($scope.includeMobileTemplate);
  });

  $scope.$on("$destroy",function (){
      $(window).off("resize.doResize"); //remove the handler added earlier
  });

}]);
