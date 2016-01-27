module.exports = function(app) {
  app.directive('howToBrew', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/how_to_brew.html',
      controller: 'HowToBrewController',
      scope: {
        previous: '&',
        next: '&'
      }
    };
  });
};
