const angular = require('angular');
const slideShowApp = angular.module('slideShowApp', []);
const slides = require(__dirname + '/../slides/slide_list');

require('./slideshow')(slideShowApp, slides);
