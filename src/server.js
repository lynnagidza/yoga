const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressRedirect = require('express-redirect');

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const individualProductRouter = require('./routes/product-details');
const shoppingCartRouter = require('./routes/cart');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/product', individualProductRouter);
app.use('/cart', shoppingCartRouter);

app.use((err, req, res, next) => {
  res.status(500).send('Internal server error');
  next(err);
});

app.listen(port, () => {
});
