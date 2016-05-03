module.exports = function(app) {
  require('./controllers/slideshow_controller.js')(app);
  require('./directives/slideshow_main_directive.js')(app);
  require('./directives/slide1_directive.js')(app);
  require('./directives/slide2_directive.js')(app);
  require('./directives/slide3_directive.js')(app);
  require('./directives/slide4_directive.js')(app);
};
