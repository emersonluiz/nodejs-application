module.exports = () => {
    const Mongoose = require('mongoose');

    var person = new Mongoose.Schema({
        firstName: {type: String, trim: true, required: true},
        lastName: {type: String, trim: true, required: true},
        email: {type: String, trim: true, required: true, index: {unique: true}}
    })

    return Mongoose.model('Persons', person);
}