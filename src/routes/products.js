const express = require('express');
const router = express.Router();
const products = require('../models/product-listing');

router.get('/', (req, res) => {
    const category = req.query.category;

    const groupedProducts = {};

    products.forEach(product => {
        const productCategory = product.category;
        if (!groupedProducts[productCategory]) {
            groupedProducts[productCategory] = [];
        }
        groupedProducts[productCategory].push(product);
    });

    const sectionsToRender = category && category !== 'all' ? [category] : Object.keys(groupedProducts);

    res.render('products', { groupedProducts, sectionsToRender, selectedCategory: category, product: {} });
});

module.exports = router;
