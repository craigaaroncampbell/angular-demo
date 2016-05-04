module.exports = function(app, slides) {
  require('./controllers/slideshow_controller.js')(app, slides);
  require('./directives/slideshow_main_directive.js')(app);
  require('./directives/slides_directive.js')(app);
};
