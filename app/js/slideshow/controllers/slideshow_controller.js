module.exports = function(app) {
  app.controller('SlideShowController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    $scope.pages = ['slide1', 'slide2', 'slide3', 'slide4'];
    $scope.index = 0;
    $scope.current = $scope.pages[$scope.index];

    $scope.previous = function() {
      $scope.index--;
      if ($scope.index < 0) $scope.index = $scope.pages.length - 1;
      $scope.current = $scope.pages[$scope.index];
    };

    $scope.next = function() {
      $scope.index++;
      if ($scope.index >= $scope.pages.length) $scope.index = 0;
      $scope.current = $scope.pages[$scope.index];
    };

  }]);
};

