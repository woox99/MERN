const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch( err => res.status(400).json(err) )
}

module.exports.updateAuthor = (req, res) => {
    const {fName, lName} = req.body;

    if(!fName || !lName){
        return res.status(400).json({error: "First Name and Last Name are required."})
    }
    
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(author => res.json(author))
        .catch( err => res.status(400).json(err) )
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => console.log(err))
}