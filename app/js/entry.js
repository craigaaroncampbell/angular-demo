const angular = require('angular');
const slideShowApp = angular.module('slideShowApp', []);
const slides1 = require(__dirname + '/slide_deck_1');
const slides2 = require(__dirname + '/slide_deck_2');

require('./slideshow')(slideShowApp);

slideShowApp.run(['$rootScope', function($rootScope) {
  $rootScope.slides1 = slides1;
  $rootScope.slides2 = slides2;
}]);
