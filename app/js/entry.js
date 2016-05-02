require('angular/angular');
require('angular-route');

var angular = window.angular;

var beerApp = angular.module('beerApp', ['ngRoute']);

require('./howto/howto.js')(beerApp);

beerApp.config(['$routeProvider', function($route) {
	$route
	.when('/', {
		templateUrl: '/templates/how_to_brew_view.html',
		controller: 'HowToBrewController'
	})
	.otherwise({
		redirectTo: '/404'
	});
}]);
