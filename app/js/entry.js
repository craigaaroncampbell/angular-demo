const angular = require('angular');
const slideShowApp = angular.module('slideShowApp', []);
const slides = require('../slides/slide_list');

require('./slideshow')(slideShowApp);
slideShowApp.run(['$rootScope', function($rootScope) {
  $rootScope.slides = slides;
}]);
