var Beglobal = require('node-beglobal');
// var beglobal = new BeGlobal.BeglobalAPI({
// 	api_token: 'API_TOKEN'
// });
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/translate', indexController.translatePageLaunch);
app.post('/translate', indexController.translate);

var server = app.listen(9348, function() {
	console.log('Express server listening on port ' + server.address().port);
});
