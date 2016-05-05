const angular = require('angular');
const slideShowApp = angular.module('slideShowApp', []);

require('./slideshow')(slideShowApp);

slideShowApp.filter('trustUrl', ['$sce', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}]);

