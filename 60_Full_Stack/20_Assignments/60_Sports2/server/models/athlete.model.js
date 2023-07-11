const mongoose = require('mongoose');

const AthleteSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, 'first name is required.'],
        minlength: [2, "First Name must be atleast 2 characters"]
    },
    lastName: {
        type: String,
        required: [ true, 'Last name is required.'],
        minlength: [2, "Last Name must be atleast 2 characters"]
    },
    sport: {
        type: String,
        required: [ true, 'Sport is required.'],
        minlength: [2, "Sport must be atleast 2 characters"]
    }
});

module.exports = mongoose.model('Athlete', AthleteSchema);