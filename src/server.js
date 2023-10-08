const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressRedirect = require('express-redirect');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

expressRedirect(app);

app.use(cookieParser());
app.use((req, res, next) => {
  let { guestId } = req.cookies;

  if (!guestId) {
    guestId = Date.now().toString();
    res.cookie('guestId', guestId);
  }
  req.guestId = guestId;
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const individualProductRouter = require('./routes/product-details');
const shoppingCartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const signInRouter = require('./routes/signin');
const signUpRouter = require('./routes/signup');
const orderConfirmationRouter = require('./routes/order-confirmation');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/product', individualProductRouter);
app.use('/cart', shoppingCartRouter);
app.use('/checkout', checkoutRouter);
app.use('/signin', signInRouter);
app.use('/signup', signUpRouter);
app.use('/order-confirmation', orderConfirmationRouter);

app.use((err, req, res, next) => {
  res.status(500).send('Internal server error');
  next(err);
});

app.listen(port, () => {
});
