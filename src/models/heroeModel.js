const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroeSchema = new Schema({
  nombre: String,
  descripcion: String,
  img: String,
  int: String,
  str: String,
  dur: String,
  spe: String,
  pow: String,
  com: String
});

module.exports = mongoose.model('Heroe', heroeSchema);