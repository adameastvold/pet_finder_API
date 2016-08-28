var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var postAnimal = require("./routes/postAnimal.js");
var getAnimal = require("./routes/getAnimal.js");
var getCount = require("./routes/getFavCount.js");

app.use(bodyParser.json());

app.use('/postAnimal', postAnimal);
app.use('/getAnimal', getAnimal);
app.use('/getFavCount', getCount);


// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Handle index file separately
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
