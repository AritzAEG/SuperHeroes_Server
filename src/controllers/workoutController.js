const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await workoutService.getAllWorkouts();
    if (allWorkouts.length === 0) {
      return res.status(404).send({message: "No existen workouts"});
    }
    res.send({ status: "OK", data: allWorkouts});
  } catch (error) {
    res 
      .status(error?.status || 500)
      .send({ status: "FAILED",
          message: "Error al realizar la peticion:",
        data: { error: error?.message || error} });
  }
};

const createNewWorkout = async (req, res) => {
  const {body} = req;
  if (
    !body.Nombre ||
    !body.Velocidad ||
    !body.Latitude ||
    !body.Longitude
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error: "One of the following keys is missing or is empty in request body"
        },
      });
    return;
  }

  const newWorkout = {
    Nombre: body.Nombre,
    Velocidad: body.Velocidad,
    Latitude: body.Latitude,
    Longitude: body.Longitude
  };

  try {
    const createdWorkout = await workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createdWorkout});
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED",
              message: "Error al realizar la peticion",
              data: {error:error?.message || error}});
  }
};

module.exports = {getAllWorkouts, createNewWorkout}