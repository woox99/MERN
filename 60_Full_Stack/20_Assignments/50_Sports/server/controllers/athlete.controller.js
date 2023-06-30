const Athlete = require('../models/athlete.model');

    module.exports.createAthlete = (req, res) => {
        Athlete.create(req.body)
            .then( athlete => res.json(athlete))
            .catch( err => res.json(err))
    }

    module.exports.findAllAthletes = (req, res) => {
        Athlete.find({})
            .then( athletes => res.json(athletes))
            .catch( err => res.json(athletes))
    }

    module.exports.deleteAthlete = (req, res) => {
        Athlete.findOneAndDelete({_id: req.params.id})
            .then( deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    }