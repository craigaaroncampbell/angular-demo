module.exports = function(app) {
  app.directive('slideFour', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/slide_four.html'
    };
  });
};
