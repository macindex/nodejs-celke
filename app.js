// var http = require('http');
const express = require("express")
const app = express();
//conexão com db Mysql
const mysql = require ('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'claudio',
    password : '123456',
    database : 'celke'
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
		console.log('resultado: ', rows);
	}else{
		console.log('Erro ao realizar a consulta');
	}
  });


app.get("/", function(req, res){

    res.sendFile(__dirname + "/src/index.html");
});
app.get("/sobre-empresa", function(req, res){

    res.sendFile(__dirname + "/src/sobre-empresa.html");
});


app.get("/blog", function(req, res){

    res.send("Página do blog");
});

app.get("/contato", function(req, res){

    res.send("Página de contato");
});

//localhost:8080
app.listen(8080);

// http.createServer(function(req, res){
// res.end("Gerenciador!");
// }).listen(8080);

