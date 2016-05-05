module.exports = function(app) {
  app.controller('SlideShowController', ['$scope', function($scope) {
    $scope.index = 0;

    $scope.previous = function() {
      $scope.index--;
      if ($scope.index < 0) $scope.index = $scope.slides.length - 1;
    };

    $scope.next = function() {
      $scope.index++;
      if ($scope.index >= $scope.slides.length) $scope.index = 0;
    };
  }]);
};

