const Workout = require('../models/workoutModel');

const getAllWorkouts = async () => {
  try
  {
    const workouts = await Workout.find();
    return workouts;
  }
  catch (error)
  {
    throw error;
  }
};

const createNewWorkout = async (newWorkout) => {
  try
  {
    let workoutToInsert = new Workout(newWorkout);
    const createdWorkout = await workoutToInsert.save();
    return createdWorkout;
  }
  catch (error)
  {
    throw error;
  }
};

module.exports = { getAllWorkouts, createNewWorkout};