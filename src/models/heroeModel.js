const mongoose = require('mongoose');

const { Schema } = mongoose;

const heroeSchema = new Schema({
  nombre: String,
  descripcion: String,
  img: String,
  int: Number,
  str: Number,
  dur: Number,
  spe: Number,
  pow: Number,
  com: Number
});

module.exports = mongoose.model('Heroe', heroeSchema);