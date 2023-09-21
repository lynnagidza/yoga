const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../public')));

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const individualProductRouter = require('./routes/product-details');
// const shoppingCartRouter = require('./routes/cart');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/product', individualProductRouter);
// app.use('/cart', shoppingCartRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
