const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  id: Number,
  nombre: String,
  Descripcion: String,
  Foto: String
});

module.exports = mongoose.model('Workout', workoutSchema);