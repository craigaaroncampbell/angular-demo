module.exports = function(app) {
  app.directive('sanitation', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/sanitation.html',
      controller: 'HowToBrewController'
    };
  });
};
