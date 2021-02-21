const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('celke', 'claudio', '123456',{
  host: 'localhost',
  dialect: 'mysql'/* one of */
});

sequelize.authenticate().then(function(){
  console.log('Conexão realizada com sucesso');
}).catch(function(err){
  console.log('Erro ao realizar conexão realizada com BD' + err);
});

// // var http = require('http');
// const express = require("express")
// const app = express();
// //conexão com db Mysql
// const mysql = require ('mysql');

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'claudio',
//     password : '123456',
//     database : 'celke'
//   });


//   connection.connect(function(err){
//     if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
//   });
//   connection.query("DELETE FROM users WHERE id = 7", function(err, result){
//     if(!err){
//       console.log('Usuario apagado com sucesso!');
//       }else{		
//       console.log('Erro: O usuario não foi  apagado com sucesso!');	
//       }
//   });

//   connection.query("UPDATE users SET nome = 'carmen1' WHERE id = 7", function(err, result){
//     if(!err){
//       console.log('Usuario editado com sucesso!');
//       }else{		
//       console.log('Erro: O usuario não foi  editado com sucesso!');	
//       }
//   });


//   connection.query("INSERT INTO users(nome, email) VALUES ('jessica', 'jessica@gmail.com')", function(err, result){
//     if(!err){
//     console.log('Usuario cadastrado com sucesso!');
//     }else{		
//     console.log('Usuario cadastrado com sucesso!');	
//     }
//   });
  
//   connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });

//   connection.query('SELECT * FROM users', function(err, rows, fields){
//     if(!err){
// 		console.log('resultado: ', rows);
// 	}else{
// 		console.log('Erro ao realizar a consulta');
// 	}
//   });


// app.get("/", function(req, res){

//     res.sendFile(__dirname + "/src/index.html");
// });
// app.get("/sobre-empresa", function(req, res){

//     res.sendFile(__dirname + "/src/sobre-empresa.html");
// });


// app.get("/blog", function(req, res){

//     res.send("Página do blog");
// });

// app.get("/contato", function(req, res){

//     res.send("Página de contato");
// });

// //localhost:8080
// app.listen(8080);

// // http.createServer(function(req, res){
// // res.end("Gerenciador!");
// // }).listen(8080);

