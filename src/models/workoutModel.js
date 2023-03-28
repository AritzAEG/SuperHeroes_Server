const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  id: Number,
  nombre: String,
  descripcion: String,
  img: String
});

module.exports = mongoose.model('Workout', workoutSchema);