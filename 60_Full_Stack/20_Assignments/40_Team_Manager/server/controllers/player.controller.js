const Player = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err))
}

module.exports.changeStatus = (req, res) => {
    Player.findOneAndUpdate( 
        {_id: req.params.id},
        req.body,
        {new:true}
        )
        .then( updatedPlayer => res.json(updatedPlayer))
        .catch( err => res.json(err));
};