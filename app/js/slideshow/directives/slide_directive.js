module.exports = function(app) {
  app.directive('slide', function() {
    return {
      restrict: 'A',
      templateUrl: 'templates/slide.html',
      transclude: true,
      scope: {
        slides : '=',
        index: '=',
      }
    };
  });
};
