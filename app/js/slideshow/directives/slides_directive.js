module.exports = function(app) {
  app.directive('slides', function() {
    return {
      restrict: 'C',
      templateUrl: 'templates/slides.html',
      transclude: true,
      scope: {
        slide : '='
      }
    };
  });
};
