var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');

const { configureHelmet, configureCors, sanitizeInputs } = require('./middlewares/securityMiddleware');
const { cleanupExpiredTokens } = require('./utils/tokenCleanups');
const { detectOverdueRentals } = require('./utils/overdueDetector');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var categoriesRouter = require('./routes/categories');
var productRouter = require('./routes/product');
var cartRouter = require('./routes/cart');
var ordersRouter = require('./routes/order');
var rentRouter = require('./routes/rent');
var imagesRouter = require('./routes/images');

var app = express();

app.use(configureHelmet());
app.use(configureCors());
app.use(compression());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sanitizeInputs);
app.use(express.static(path.join(__dirname, 'public'),
  {
    maxAge: '1d',
    etag: true
  }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/orders', ordersRouter);
app.use('/rent', rentRouter);
app.use('/images', imagesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

setInterval(cleanupExpiredTokens, 86400000);
cleanupExpiredTokens();

setInterval(detectOverdueRentals, 3600000);
detectOverdueRentals();

module.exports = app;
