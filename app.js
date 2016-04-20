var express = require('express')
var app = express()
var path = require('path');
var util = require('util');
var j = require('ejs');
var csv = require('./public/js/csv.js');



app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, '../assets/*'));
app.set('view engine', 'ejs');



var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '


// Serve static files

app.use(express.static('public'));// Directorio de donde debe cargar los paquetes http://expressjs.com/api.html#app.use#
//app.use('static',express.static(__dirname + 'public'));
//app.set('expressLayaouts');
app.use(expressLayouts);


// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 3000));

 var bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }));



 app.get('/',function(req,res){

   res.render('index',{title:"Commando Separated Value Analyzer miapp",error:""});

 });

 app.post('/table', function(req, res, next){
   console.log("llego al server");
    var original = req.body.original;
      var data = csv.calculate(original);
      res.render('table', {items: data, title: "Comma Separated Value Analyzer"});

});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
//module.exports = app;
