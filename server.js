var app = require('express')();

var PORT = process.env.PORT || 3000;

var nonAPIRouter = require(__dirname + '/routes/non_api_routes.js');
app.use('/' , nonAPIRouter);

app.listen(PORT, function() {
	console.log('now pouring beer on port: ' + PORT);
});

