module.exports = function(app) {
  app.controller('SlideShowController', ['$scope', function($scope) {

    $scope.pages = [
    {
      header: 'Slide 1',
      text: 'Authoritatively unleash fully researched process improvements with emerging ROI. Rapidiously reinvent leading-edge benefits for distinctive catalysts for change. Competently synthesize quality initiatives before web-enabled "outside the box" thinking. Rapidiously extend leveraged channels via frictionless e-services. Monotonectally reintermediate goal-oriented synergy through alternative architectures.'
    },
    {
      header: 'Slide 2',
      text: 'Wow such text. So awesome you can\'t even stand it.'
    },
    {
      header: 'Slide 3',
      text: 'Wow such slide 3 text'
    },
    {
      header: 'Slide 4',
      text: 'That\'s all folks!'
    }
    ];

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

