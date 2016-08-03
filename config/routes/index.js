var express = require('express');
var routes = express.Router();
var connection = require('../../modulos/conexion');

routes.use(function prueba(req, res, next){
	console.log('Usando Router en modulo aparte.');
	next();
});

routes.get('/', function(req, res){
	res.send('<h1>Para verificar los usuarios, acceder con /usuarios y si quiere uno especifico, /usuario/id');
})
routes.get('/usuarios', function(req, res){
	connection.query('SELECT * FROM usuarios', function(err, result){
		res.send(result);
	});
});

routes.get('/usuarios/:id', function(req, res){
	connection.query('SELECT * FROM usuarios WHERE id =' + req.params.id, function(err, result){
		if (result.length !== 0){
			res.send(result);
		}else{
			res.send('No existe tal usuario');
		}
	});
});

module.exports = routes;