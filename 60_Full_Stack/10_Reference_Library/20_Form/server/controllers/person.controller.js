const Person = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: 'Hello world'
    });
}

// Create
module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err))
};

// Find
module.exports.findAllPeople = (req, res) => {
    Person.find({})
    .then( data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
}

module.exports.findOne = (req, res) => {
    Person.findOne( {_id: req.params.id })
        .then( person => res.json(person))
        .catch( err => res.json(err))
}