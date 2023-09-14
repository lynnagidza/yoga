const express = require('express');
const router = express.Router();

router.get('/product-listing', (req, res) => {
    const selectedCategory = req.query.category || 'all';
    const categories = ['birthday', 'congratulations', 'gratitude'];

    if (!categories.includes(selectedCategory)) {
        res.redirect(`/product-listing?category=${selectedCategory}`);
        return;
    }

    const products = fetchProductsByCategory(selectedCategory);

    res.render('product-listing', { products, selectedCategory });
});

module.exports = router;
