const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const moment = require('moment');
const Pagamento = require("./models/Pagamento");

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers: {
      formatDate: (date) => {
          return moment(date).format('DD/MM/YYYY')
      }
  }
}))
app.set('view engine', 'handlebars')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

// app.get("/", function(req, res){

//   res.sendFile(__dirname + "/views/layouts/main.html");
  // res.send("Guia para pagamentos");
// });
app.get("/pagamento", function(req, res){
  Pagamento.findAll({order: [['id', 'ASC' ]]}).then(function(pagamentos){
    res.render('pagamento', {pagamentos: pagamentos});
  })
  // res.sendFile(__dirname + "/views/pagamento.handlebars");
});
app.get("/cad-pagamento", function(req, res){
   res.render('cad-pagamento');
});

app.post("/add-pagamento", function(req, res){
  Pagamento.create({
    nome: req.body.nome,
    valor: req.body.valor
  }).then(function(){
    res.redirect('/pagamento')
    // res.send("Pagamento cadastrado com sucesso")
  }).catch(function(erro){
    res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
  })
  // res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>");
});

//________________________________

// AULA 13

// const express = require("express");
// const app = express();
// const bodyParser = require('body-parser');
// const pagamento = require("./models/Pagamento");


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())

// app.get("/", function(req, res){

//   res.sendFile(__dirname + "/views/layouts/index.html");
//   // res.send("Guia para pagamentos");
// });
// app.get("/pagamento", function(req, res){

//   res.sendFile(__dirname + "/views/pagamento.html");
// });
// app.get("/cad-pagamento", function(req, res){

//   res.sendFile(__dirname + "/views/cad-pagamento.html");
// });

// app.post("/add-pagamento", function(req, res){
//   pagamento.create({
//     nome: req.body.nome,
//     valor: req.body.valor
//   }).then(function(){
//     res.redirect('/pagamento')
    //res.send("Pagamento cadastrado com sucesso")
  // }).catch(function(erro){
  //   res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
  // })
  //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>");

//});
//______________________________




// Aula 12 Handlebars
// Handlebars
// const express = require("express");
// const app = express();

// const handlebars = require("handlebars");

// console.log(template({ name: "Nils" }));

// app.engine('handlebars', handlebars({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

// //Rotas
// app.get("/pagamento", function(req, res){
//     res.render('./pagamento');
// });

// app.get("/add-pagamento", function(req, res){
//   res.send("Formulário para cadastrar pagamento");
// });



// const { Sequelize, Model, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('celke', 'claudio', '123456',{
// // const sequelize = new Sequelize('celke', 'clau', '123456',{
//   host: 'localhost',
//   dialect: 'mysql' /* one of mysql*/
// });

// sequelize.authenticate().then(function(){
//   console.log('Conexão realizada com sucesso');
// }).catch(function(err){
//   console.log('Erro ao realizar conexão realizada com BD' + err);
// });

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('pagamentos', {
//   // Model attributes are defined here
//   nome: {
//     type: Sequelize.STRING,
//     // allowNull: false
//   },
//   valor: {
//     type: Sequelize.DOUBLE
//     // allowNull defaults to true
//   }
//   // Other model options go here
// });


//INSERINDO REGISTRO
//const Pagamento = sequelize.define('pagamentos', {
  // Model attributes are defined here
  // nome: {
  //   type: Sequelize.STRING,
    // allowNull: false
  // },
  // valor: {
  //   type: Sequelize.DOUBLE
    // allowNull defaults to true
  //}
  // Other model options go here
// });

// Pagamento.create({
//   nome: "Energia",
//   valor: 220
// })

// Este comando irá criar tabela com sequelize
//User.sync({force: true});

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
app.listen(8080)

// // http.createServer(function(req, res){
// // res.end("Gerenciador!");
// // }).listen(8080);

