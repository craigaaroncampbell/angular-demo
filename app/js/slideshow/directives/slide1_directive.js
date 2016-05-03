module.exports = function(app) {
  app.directive('slideOne', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/slide_one.html'
    };
  });
};
