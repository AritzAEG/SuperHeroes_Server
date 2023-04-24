const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroeSchema = new Schema({
  id: String,
  nombre: String,
  descripcion: String,
  img: String
});

module.exports = mongoose.model('Heroe', heroeSchema);