module.exports = function(app, slides) {
  require('./controllers/slideshow_controller.js')(app, slides);
  require('./directives/slideshow_directive.js')(app);
  require('./directives/slide_directive.js')(app);
};
