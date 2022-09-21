const express = require('express');

const router = express.Router();

// admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/products" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

// admin//add-product => POSt
router.post('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router