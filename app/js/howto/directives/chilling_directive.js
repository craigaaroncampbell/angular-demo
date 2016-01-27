module.exports = function(app) {
  app.directive('chilling', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/chilling.html',
      controller: 'HowToBrewController'
    };
  });
};
