const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(person => res.json(person))
        .catch( err => res.json(err))
};