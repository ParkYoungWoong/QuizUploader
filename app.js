var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var glob = require('glob');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // mongoose v4 이상부터 save() 포함 쿼리 등 비동기 동작에서는 Promises/A+ conformant pomises를 반환 / 코드를 require(‘mongoose’) 아래에 삽입


app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./public'));

var controllers = glob.sync('./app/controllers/*.js');
controllers.forEach(function (controller) {
  require(controller)(app);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});


mongoose.connect('mongodb://herop:herop1216@ds153659.mlab.com:53659/db_herop');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongolab connect!');
});