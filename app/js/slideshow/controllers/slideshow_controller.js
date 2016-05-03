const slides = require(__dirname + '/../../../slides/slide_list');

module.exports = function(app) {
  app.controller('SlideShowController', ['$scope', function($scope) {

    $scope.slides = slides;
    $scope.index = 0;
    $scope.current = $scope.slides[$scope.index];

    $scope.previous = function() {
      $scope.index--;
      if ($scope.index < 0) $scope.index = $scope.slides.length - 1;
      $scope.current = $scope.slides[$scope.index];
    };

    $scope.next = function() {
      $scope.index++;
      if ($scope.index >= $scope.slides.length) $scope.index = 0;
      $scope.current = $scope.slides[$scope.index];
    };
  }]);
};

