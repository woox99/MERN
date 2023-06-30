const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [
            true, 
            'first name is required.'
        ]},
    lastName: {
        type: String,
        required: [
            true, 
            'Last name is required.'
        ]},
    sport: {
        type: String,
        required: [
            true,
            'Sport is required.'
        ]}
});

module.exports = mongoose.model('Athlete', AthleteSchema);