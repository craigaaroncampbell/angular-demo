module.exports = function(app) {
  app.directive('mainView', function() {
    return {
      restrict: 'AC',
      templateUrl: 'templates/main_view.html',
      controller: 'SlideShowController',
      scope: {
        previous: '&',
        next: '&'
      }
    };
  });
};
