var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//app.use(express.static('HTMLS'));
require('./routes/mushroom')(app);
require('./routes/field')(app);

var server = app.listen(3000, function () {
    console.log('Running on :3000');
});
