module.exports = function(app) {
  app.directive('slideThree', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/slide_three.html'
    };
  });
};
