module.exports = function(app) {
  app.directive('gettingStarted', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/getting_started.html',
      controller: 'HowToBrewController'
    };
  });
};
