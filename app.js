var express = require('express')
var app = express()
var path = require('path');

var j = require('ejs');



/*
Las funciones de middleware pueden realizar las siguientes tareas:

Ejecutar cualquier código.
Realizar cambios en la solicitud y los objetos de respuesta.
Finalizar el ciclo de solicitud/respuestas.
Invocar la siguiente función de middleware en la pila
*/


// https://nodejs.org/api/path.html


// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, '../assets/*'));
app.set('view engine', 'ejs');



var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '

// Serve static files
//app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));// Directorio de donde debe cargar los paquetes http://expressjs.com/api.html#app.use#
//app.use('static',express.static(__dirname + 'public'));
app.set('expressLayaouts');

//app.use(expressLayouts);

// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 8080));





/*
 * body-parser is a piece of express middleware that
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body`
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */

 // instruct the app to use the `bodyParser()` middleware for all routes
 var bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }));


 //app.get('/', function(req, res){
//   res.send('hello world');// POne un hola en nuestro servidor
// });


 app.get('/',function(req,res){
   // The form's action is '/' and its method is 'POST',
   // so the `app.post('/', ...` route will receive the
   // result of our form
   res.render('index',{title:"Commando Separated Value Analyzer miapp",layout:'a, b, c, d\naa, bb, cc, dd'});

 });
 // A browser's default method is 'GET', so this
 // is the route that express uses when we visit
 // our site initially.
 //app.get('/',function(req,res){
 //     j.delimiter = '$';
 //});
 app.get('/prueba',function(req,res,next){
   var original = req.body.original;//id del index.ejs
   res.render('layout',{items:data});
   next();
 });


 // This route receives the posted form.
 // As explained above, usage of 'body-parser' means
 // that `req.body` will be filled in with the form elements
 /*
 app.post('/', function(req, res){
   var userName = req.body.userName;
   res.render('inde', {userName: userName, title: 'greet'});
 });*/

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
module.exports = app;
