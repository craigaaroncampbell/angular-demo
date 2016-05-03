module.exports = function(app) {
  app.directive('slides', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/slides.html',
      transclude: true
    };
  });
};
