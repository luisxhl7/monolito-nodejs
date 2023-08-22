const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    imagen: String
});

// crear modelo
const Person = mongoose.model('imagenes', personSchema);

module.exports = Person;