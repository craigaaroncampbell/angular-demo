require('angular/angular');
require('angular-route');
require('angular-base64');

var angular = window.angular;

var beerApp = angular.module('beerApp', ['ngRoute', 'base64', require('angular-cookies')]);

require('./beers/beers.js')(beerApp);
require('./users/users.js')(beerApp);
require('./howto/howto.js')(beerApp);

beerApp.config(['$routeProvider', function($route) {
	$route
	.when('/', {
		templateUrl: '/templates/welcome.html',
		// controller: 'HowToBrewController'
	})
	.when('/404', {
		templateUrl: '/templates/404.html',
		// controller: 'HowToBrewController'
	})
	.when('/about', {
		templateUrl: '/templates/about.html',
		// controller: 'HowToBrewController'
	})
	.when('/howto', {
		templateUrl: '/templates/how_to_brew_view.html',
		controller: 'HowToBrewController'
	})
	.when('/beers', {
		templateUrl: '/templates/beers_view.html',
		controller: 'BeersController'
	})
	.when('/signup', {
		templateUrl: 'templates/users/views/signupin_view.html',
		controller: 'SignupController'
	})
	.when('/signin', {
		templateUrl: 'templates/users/views/signupin_view.html',
		controller: 'SigninController'
	})
	.otherwise({
		redirectTo: '/404'
	});
}]);
