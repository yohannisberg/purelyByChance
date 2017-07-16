angular.module('purelyByChance').controller('navBarCtrl', function ($scope, mainService) {

  $scope.mobileMen=true;

  $scope.showMobileMenu=function(){
    if($scope.mobileMen==true){
      $scope.mobileMen=false;
    }
    else if($scope.mobileMen==false){
      $scope.mobileMen=true;
    }
  }

});
