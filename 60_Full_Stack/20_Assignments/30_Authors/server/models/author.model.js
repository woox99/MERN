const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [
            true,
            "First Name is required"
        ]
    },
    lName: {
        type: String,
        required: [
            true,
            "Last Name is required"
        ]
    }
    },{timestamps:true}

);

module.exports = mongoose.model('Author', AuthorSchema)