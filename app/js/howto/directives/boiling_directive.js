module.exports = function(app) {
  app.directive('boiling', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/boiling.html',
      controller: 'HowToBrewController'
    };
  });
};
