module.exports = function(app) {
  app.directive('fermentation', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/fermentation.html',
      controller: 'HowToBrewController'
    };
  });
};
