var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var nationsRouter = require('./routes/nationRouter');
var playerRouter = require('./routes/playerRouter');
var app = express();

const mongoose = require('mongoose');
const Nations  = require('./models/nation');
const Players = require('./models/player');
mongoose.set('strictQuery', true);

const url = 'mongodb://localhost:27017/wc2022';
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log("Connected to sever successfully");
},(err) => {console.log(err)})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/nations', nationsRouter);
app.use('/players', playerRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
