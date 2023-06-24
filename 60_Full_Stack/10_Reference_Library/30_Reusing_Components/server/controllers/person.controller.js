const Person = require('../models/person.model');

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err))
};

module.exports.findAllPeople = (req, res) => {
    Person.find({})
    .then( data => res.json(data))
    .catch(err => res.json(err))
}

module.exports.findOne = (req, res) => {
    Person.findOne( {_id: req.params.id })
        .then( person => res.json(person))
        .catch( err => res.json(err))
}

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then( data => response.json(data))
        .catch( err => response.json(err))
}

module.exports.deletePerson = (req, res) => {
    Person.deleteOne({_id: req.params.id})
        .then( deleteConfirm => res.json(deleteConfirm))
        .catch( err => console.log(err))
}