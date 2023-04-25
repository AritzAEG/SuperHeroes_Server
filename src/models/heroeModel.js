const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroeSchema = new Schema({
  nombre: String,
  descripcion: String,
  img: String
});

module.exports = mongoose.model('Heroe', heroeSchema);