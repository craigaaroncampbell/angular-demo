require('angular/angular');
require('angular-route');

var angular = window.angular;

var slideShowApp = angular.module('slideShowApp', ['ngRoute']);

require('./slideshow/slideshow.js')(slideShowApp);

// slideShowApp.config(['$routeProvider', function($route) {
// 	$route
// 	.when('/', {
// 		templateUrl: '/templates/main_view.html',
// 		controller: 'SlideShowController'
// 	})
// 	.otherwise({
// 		redirectTo: '/'
// 	});
// }]);
