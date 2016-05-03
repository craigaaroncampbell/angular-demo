module.exports = function(app) {
  require('./controllers/slideshow_controller.js')(app);
  require('./directives/slideshow_main_directive.js')(app);
  require('./directives/slides_directive.js')(app);
};
