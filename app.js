var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var login= require('./routes/login_route');
//Admin
var product=require('./admin routes/product_route');
var TopProduct=require('./admin routes/toporderofproduct_route');
var ProductPrice=require('./admin routes/highestproductprice_route');
var signup=require('./admin routes/signup_route');
var employee=require('./admin routes/employee_route');
var category=require('./admin routes/category_route');
var order=require('./admin routes/order_route');
var category1=require('./admin routes/categoryname_route');
var user=require('./admin routes/user_route');
var ProductWithoutImage=require('./admin routes/productWithoutImage');
var loan=require('./admin routes/loan_route');
var loanReject=require('./admin routes/loan_route_reject');
var loan_delete=require('./admin routes/loan_delete_route');
var colour=require('./admin routes/colour_route');
var countproduct=require('./admin routes/count_product_route');
var countuser=require('./admin routes/count_user_route');
var TopSellingProduct=require('./admin routes/topsellingproduct_route');
var productpricesum=require('./admin routes/product_prize_sum_route');
var userDetailByorder=require('./admin routes/getUserDetailsByOrder_route');
var customerinvoice=require('./admin routes/customer_invoice_route');



//Employee
var emplogin=require('./employee routes/login_route');
var empviewbill=require('./employee routes/bill_route');
var empbill_details=require('./employee routes/bill_details_route');
var allempsalary=require('./employee routes/salary_route');
var allemppendingsalary=require('./employee routes/pending_salary_route');
var allempdonesalary=require('./employee routes/done_salary_route');
var empvieworder=require('./employee routes/order_route');
var loanemp=require('./employee routes/loan_route');
var empgetdataforloan=require('./employee routes/get_data_for_loan_route');
var empmyprofile=require('./employee routes/myprofile_route');
var empmywork=require('./employee routes/my_work_route');
var empgetdelieveryboy=require('./employee routes/get_delievery_boy_route');
var update_product_without_pic=require('./employee routes/update_product_without_pic');
var empmyloan=require('./employee routes/myloan_route');

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

app.use('/update_product_without_pic',ProductWithoutImage);
app.use('/product',product);
app.use('/TopProduct',TopProduct);
app.use('/ProductPrice',ProductPrice);
app.use('/signup',signup);
app.use('/product',product);
app.use('/category',category);
app.use('/category1',category1);
app.use('/order',order);
app.use('/employee',employee);
app.use('/user',user);
app.use('/loan',loan);
app.use('/colour',colour);
app.use('/loanReject',loanReject);
app.use('/loandelete',loan_delete);
app.use('/countproduct',countproduct);
app.use('/countuser',countuser);
app.use('/TopSellingProduct',TopSellingProduct);
app.use('/productpricesum',productpricesum);
app.use('/userDetailByOrder',userDetailByorder);
app.use('/customerInvoice',customerinvoice);



//Employee
app.use('/emplogin',emplogin);
app.use('/empviewbill',empviewbill);
app.use('/empgetbilldetails',empbill_details);
app.use('/loanemp',loanemp);

app.use('/empviewallempsalary',allempsalary);
app.use('/emppendingempsalary',allemppendingsalary);
app.use('/empdoneempsalary',allempdonesalary);
app.use('/empvieworder',empvieworder);
app.use('/empgetdataforloan',empgetdataforloan);
app.use('/empmyprofile',empmyprofile);
app.use('/empviewwork',empmywork);
app.use('/empgetdelieveryboy',empgetdelieveryboy);
app.use('/update_product_without_pic',update_product_without_pic);
app.use('/empmyloan',empmyloan);

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
