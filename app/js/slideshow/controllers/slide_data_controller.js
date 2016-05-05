module.exports = function(app) {
  app.controller('SlideDataController', ['$scope', function($scope){
    $scope.slides1 = require(__dirname + '/../../slide_deck_1');
    $scope.slides2 = require(__dirname + '/../../slide_deck_2');
  }]);
};
