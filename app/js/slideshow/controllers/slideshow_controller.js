const slide1 = require(__dirname + '/../../../slides/slide1');
const slide2 = require(__dirname + '/../../../slides/slide2');
const slide3 = require(__dirname + '/../../../slides/slide3');
const slide4 = require(__dirname + '/../../../slides/slide4');
module.exports = function(app) {
  app.controller('SlideShowController', ['$scope', function($scope) {

    $scope.pages = [slide1, slide2, slide3, slide4];
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

