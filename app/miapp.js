var express = require('express')
var app = express()

// https://nodejs.org/api/path.html
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, '../views'));
// set the view engine to ejs
app.set('view engine', 'ejs'); // http://expressjs.com/api.html#app.set


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

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  res.render('index', { title: "form"});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
