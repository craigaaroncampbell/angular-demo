var express = require('express');
var nonAPIRouter = module.exports = exports = express.Router();
var fs = require('fs');

nonAPIRouter.use(express.static(__dirname + '/../build'));

