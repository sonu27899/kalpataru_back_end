var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors=require('cors');
var indexRouter = require('./employee routes/index');
var usersRouter = require('./employee routes/users');


//Admin
var login= require('./admin routes/login_route');
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
var user_password=require('./admin routes/users');
var HighToLow=require('./admin routes/FilterHighToLow');
var LowToHigh=require('./admin routes/FilterLowToHigh');
var FilterInBetweenPrice=require('./admin routes/FilterInBetweenPrice');
var FilterInBetweenHeight=require('./admin routes/FilterInBetweenHeight');
var FilterInBetweenWidth=require('./admin routes/FilterInBetweenWidth');
var FilterInBetweenDepth=require('./admin routes/FilterInBetweenDepth');

//User
var loginByEmail= require('./user routes/loginbyemail');
var search=require('./user routes/search_route');
var wish=require('./user routes/wishlist_route'); 
var productByCategoryId=require('./user routes/productByCategoryId');
var addtoCart=require('./user routes/cart_route');
var checkRepeatProduct=require('./user routes/checkRepeatProduct');
var checkRepeatWishlist=require('./user routes/checkWishlistRepeat');
var forget=require('./user routes/forgot_password');
var mail=require('./user routes/mail_route');
var ordertable=require('./user routes/order');
var orderdetailstable=require('./user routes/orderdetails');

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
var productimage=require('./employee routes/get_image_route');
var addimage=require('./employee routes/add_image_route');

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

//Admin
app.use('/login',login);
app.use('/update_product_without_pic',ProductWithoutImage);
app.use('/signup',signup);
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
app.use('/userPassword',user_password);
app.use('/HighToLow',HighToLow);
app.use('/LowToHigh',LowToHigh);
app.use('/FilterInBetweenPrice',FilterInBetweenPrice);
app.use('/FilterInBetweenHeight',FilterInBetweenHeight);
app.use('/FilterInBetweenWidth',FilterInBetweenWidth);
app.use('/FilterInBetweenDepth',FilterInBetweenDepth);




//User
app.use('/userproductByCategoryId',productByCategoryId);
app.use('/addtocart',addtoCart);
app.use('/wishlist',wish);
app.use('/loginbyemail',loginByEmail);
app.use('/search',search);
app.use('/checkRepeatProduct',checkRepeatProduct);
app.use('/checkRepeatWishlist',checkRepeatWishlist);
app.use('/forget',forget);
app.use('/mail',mail);
app.use('/ordertable',ordertable);
app.use('/orderdetailstable',orderdetailstable);

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
app.use('/get_image',productimage);
app.use('/add_image',addimage);

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