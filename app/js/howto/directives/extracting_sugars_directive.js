module.exports = function(app) {
  app.directive('extractingSugars', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/extracting_sugars.html',
      controller: 'HowToBrewController'
    };
  });
};
