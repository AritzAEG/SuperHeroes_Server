const express = require("express");
const bodyParser = require("body-parser");
const mongodbRoute = "";

const workoutRouter = require("./routes/workoutRoutes")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/", workoutRouter);

async function start() {
  try
  {
    await mongoose.connect(mongodbRoute);
    app.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}`);
    });
    console.log("Conexion correcta")
  }
  catch (error)
  {
    console.log(`Error al conectar: ${error.message}`);
  }
}

start();