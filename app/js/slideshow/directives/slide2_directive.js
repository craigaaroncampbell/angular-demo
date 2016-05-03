module.exports = function(app) {
  app.directive('slideTwo', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/slide_two.html'
    };
  });
};
