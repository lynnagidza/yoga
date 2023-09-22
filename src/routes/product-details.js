const express = require('express');

const router = express.Router();
const products = require('../models/product-listing');

router.get('/:productId', (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    res.status(404).send('Product not found');
  } else {
    res.render('product', { product: selectedProduct });
  }
});

module.exports = router;
