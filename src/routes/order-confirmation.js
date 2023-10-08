const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('order-confirmation');
});

module.exports = router;
