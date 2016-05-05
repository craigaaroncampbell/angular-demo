module.exports = function(app) {
  app.directive('slideShow', function() {
    return {
      restrict: 'A',
      templateUrl: 'templates/slide_show.html',
      controller: 'SlideShowController',
      scope: {
        slides: '=',
        title: '@',
        subtitle: '@'
      }
    };
  });
};
