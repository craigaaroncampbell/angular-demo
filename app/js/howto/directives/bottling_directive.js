module.exports = function(app) {
  app.directive('bottling', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/bottling.html',
      controller: 'HowToBrewController'
    };
  });
};
