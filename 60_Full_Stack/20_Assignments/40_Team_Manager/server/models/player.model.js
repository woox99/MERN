const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    game: {type: Number},
    status: {type: String}
});

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [
            true,
            "Name is required."
        ]
    },
    position: {
        type: String,
        required: [
            true,
            "Position is required."
        ]
    },
    status: [StatusSchema]
}, {timestamps:true});

module.exports = mongoose.model('Player', PlayerSchema);