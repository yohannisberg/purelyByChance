'use strict';

angular.module('purelyByChance', ["ui.router"]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
    }).state('about', {
        url: '/about',
        templateUrl: './views/about.html',
        controller: 'aboutCtrl'
    }).state('schedule', {
        url: '/schedule',
        templateUrl: './views/schedule.html',
        controller: 'scheduleCtrl'
    }).state('contact', {
        url: '/contact',
        templateUrl: './views/contact.html',
        controller: 'contactCtrl'
    });
}]);
'use strict';

angular.module('purelyByChance').controller('aboutCtrl', ["$scope", "mainService", function ($scope, mainService) {}]);
'use strict';

angular.module('purelyByChance').controller('contactCtrl', ["$scope", "mainService", function ($scope, mainService) {

  $scope.initMap = function () {
    var uluru = { lat: 43.7821, lng: -111.01999999999998 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  };

  $scope.initMap();
}]);
'use strict';

angular.module('purelyByChance').controller('homeCarouselCtrl', ["$scope", function ($scope) {}]);
'use strict';

angular.module('purelyByChance').controller('homeCtrl', ["$scope", "mainService", function ($scope, mainService) {

  // $scope.getPhotos = () => {
  //   mainService.getPhotos().then(res => {
  //     console.log('yes')
  //     $scope.photo=res.data.data;
  //   })
  // }
  //
  // $scope.getPhotos()

}]);
'use strict';

angular.module('purelyByChance').controller('navBarCtrl', ["$scope", "mainService", function ($scope, mainService) {

  $scope.mobileMen = true;

  $scope.showMobileMenu = function () {
    if ($scope.mobileMen == true) {
      $scope.mobileMen = false;
    } else if ($scope.mobileMen == false) {
      $scope.mobileMen = true;
    }
  };
}]);
'use strict';

angular.module('purelyByChance').controller('scheduleCtrl', ["$scope", "mainService", function ($scope, mainService) {}]);
'use strict';

angular.module('purelyByChance').directive('footer', function () {
    return {
        restrict: "AE",
        templateUrl: "./views/footer.html"
    };
});
'use strict';

angular.module('purelyByChance').directive('homeCarousel', function () {
    return {
        restrict: "AE",
        templateUrl: "./views/homeCarousel.html"
        // controller: "homeCarouselCtrl",
    };
});
'use strict';

angular.module('purelyByChance').directive('navBar', function () {
    return {
        restrict: "AE",
        templateUrl: "./views/navBar.html",
        controller: "navBarCtrl"
    };
});
'use strict';

angular.module('purelyByChance').service('mainService', ["$http", function ($http) {

  // this.getPhotos = () => {
  //   return $http.get('https://api.instagram.com/v1/users/1593657206/?access_token=1593657206.1677ed0.0c451f973228483e87890e69c1da1cc5').then(function(response) {
  //     console.log('OU',response)
  //     return response.data;
  //   })
  // };

}]);
//# sourceMappingURL=bundle.js.map
