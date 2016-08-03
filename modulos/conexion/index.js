var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodemysql'
});

module.exports =  connection;