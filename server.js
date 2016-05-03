const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'))

app.listen(PORT, () => console.log('slideshow up on port: ' + PORT));

