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

module.exports.findOneAthlete = (req, res) => {
    Athlete.findOne({_id: req.params.id })
        .then( athlete => res.json(athlete))
        .catch( err => res.json(err))
}

module.exports.updateAthlete = (req, res) => {
    Athlete.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(athlete => res.json(athlete))
        .catch(err => res.json(err))
}