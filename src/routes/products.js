const express = require('express');
const router = express.Router();

router.get('/product-listing', (req, res) => {
  const selectedCategory = req.query.category;

  const products = fetchProductsByCategory(selectedCategory);

  res.render('product-listing', { products, selectedCategory });
});

module.exports = router;
