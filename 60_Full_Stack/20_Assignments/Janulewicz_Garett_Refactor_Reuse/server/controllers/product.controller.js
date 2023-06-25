const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(products => res.json(product))
        .catch( err => res.json(err))
};

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(data => res.json(data))
        .catch( err => res.json(err))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id })
        .then ( product => res.json(product))
        .catch ( err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then( data => res.json(data))
        .catch( err => console.log(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then( deleteConfirm => res.json(deleteConfirm))
        .catch(err => console.log(err))
}