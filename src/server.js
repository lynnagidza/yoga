const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const shoppingCartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const orderConfirmationRouter = require('./routes/order-confirmation');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', shoppingCartRouter);
// app.use('/checkout', checkoutRouter);
// app.use('/order-confirmation', orderConfirmationRouter);
// app.use('/signin', signinRouter);
// app.use('/signup', signupRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
