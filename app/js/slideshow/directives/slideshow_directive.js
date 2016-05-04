module.exports = function(app) {
  app.directive('slideShow', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/slide_show.html',
      controller: 'SlideShowController',
      scope: {
        // slides: = ''
      }
    };
  });
};
