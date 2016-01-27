module.exports = function(app) {
  require('./controllers/how_to_brew_controller.js')(app);
  require('./directives/how_to_brew_directive.js')(app);
  require('./directives/getting_started_directive.js')(app);
  require('./directives/extracting_sugars_directive.js')(app);
  require('./directives/boiling_directive.js')(app);
  require('./directives/chilling_directive.js')(app);
  require('./directives/fermentation_directive.js')(app);
  require('./directives/bottling_directive.js')(app);
  require('./directives/sanitation_directive.js')(app);
};
