var express = require('express');
var bodyParser = require('body-parser');
//var connection = require('./modulos/conexion');
var app = express();
var routes = require('./config/routes');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Bienvenido, para acceder al api ingresa /api :)');
});
app.use('/api', routes);



var server = app.listen(8000, function(){
	console.log('Server listening on port ' + server.address().port);
});