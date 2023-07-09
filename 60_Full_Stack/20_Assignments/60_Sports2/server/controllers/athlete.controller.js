const Athlete = require('../models/athlete.model');

module.exports.createAthlete = (req, res) => {
    Athlete.create(req.body)
        .then( athlete => res.json(athlete))
        .catch( err => res.status(400).json(err))
}

module.exports.findAllAthletes = (req, res) => {
    Athlete.find({})
        .then( athletes => res.json(athletes))
        .catch( err => res.json(err))
}