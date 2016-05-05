module.exports = function(app) {
  require('./controllers/slideshow_controller.js')(app);
  require('./directives/slideshow_directive.js')(app);
  require('./directives/slide_directive.js')(app);
};
