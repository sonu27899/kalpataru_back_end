var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var login= require('./routes/login_route');
var signup=require('./routes/signup_route');
var product=require('./routes/product_route');
var TopProduct=require('./routes/toporderofproduct_route');
var ProductPrice=require('./routes/highestproductprice_route');
var employee=require('./routes/employee_route');
var category=require('./routes/category_route');
var order=require('./routes/order_route');
var category1=require('./routes/categoryname_route');
var user=require('./routes/user_route');

//Employee
var emplogin=require('./employee routes/login_route');
var empviewbill=require('./employee routes/bill_route');
var empbill_details=require('./employee routes/bill_details_route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/login',login);
app.use('/signup',signup);
app.use('/product',product);
app.use('/TopProduct',TopProduct);
app.use('/ProductPrice',ProductPrice);
app.use('/category',category);
app.use('/category1',category1);
app.use('/order',order);
app.use('/employee',employee);
app.use('/user',user);

//Employee
app.use('/emplogin',emplogin);
app.use('/empviewbill',empviewbill);
app.use('/empgetbilldetails',empbill_details);
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
