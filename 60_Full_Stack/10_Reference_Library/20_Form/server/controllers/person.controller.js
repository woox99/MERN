const Person = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: 'Hello world'
    });
}

module.exports.createPerson = (req, res) => {
    Person.create(req.body)
        .then(person => res.json(person))
        .catch(err => res.json(err))
};