module.exports = function(app) {
  app.controller('HowToBrewController', ['$scope', '$http', 'someResource', '$location',, function($scope, $http, $location) {

    $scope.pages = ['getting-started', 'extracting-sugars', 'boiling', 'chilling', 'fermentation', 'bottling', 'sanitation'];
    $scope.index = 0;
    $scope.current = $scope.pages[$scope.index];

    $scope.previous = function() {
      $scope.index--;
      if ($scope.index < 0) $scope.index = $scope.pages.length - 1;
      $scope.current = $scope.pages[$scope.index];
      console.log($scope.index);
    };

    $scope.next = function() {
      $scope.index++;
      if ($scope.index >= $scope.pages.length) $scope.index = 0;
      $scope.current = $scope.pages[$scope.index];
      console.log($scope.index);
    };

  }]);
};

