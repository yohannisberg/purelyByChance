angular.module('purelyByChance').controller('contactCtrl', function ($scope, mainService) {

  $scope.initMap=function() {
  var uluru = {lat: 43.7821, lng: -111.01999999999998};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

  $scope.initMap();

});
