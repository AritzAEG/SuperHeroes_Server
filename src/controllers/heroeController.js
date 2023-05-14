const heroeService = require("../services/heroeService");

const getAllHeroes = async (req, res) => {
  try {
    const allHeroes = await heroeService.getAllHeroes();
    if (allHeroes.length === 0) {
      return res.status(404).send({message: "No existen heroes"});
    }
    res.send({ status: "OK", data: allHeroes});
  } catch (error) {
    res 
      .status(error?.status || 500)
      .send({ status: "FAILED",
          message: "Error al realizar la peticion:",
        data: { error: error?.message || error} });
  }
};

const getOneHeroe = async (req, res) => {
  const {params: { heroeId }} = req;

  if (!heroeId) {
    return res
    .status(400)
    .send({
      status: "FAILED",
      data: { error: "Parameter ':heroeId' can not be empty"},
    });
  }

  try {
    const heroe = await heroeService.getOneHeroe(heroeId);
    if (!heroe) {
      return res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: `Can´t find heroe with the id '${heroeId}'`} });
      }

      res.send({ status: "OK", data: heroe});
  
    } catch (error) {
      res
      .status(error?.status || 500)
      .send({ status: "FAILED",
              message: "Error al realizar la peticion:",
              data: { error: error?.message || error} });
    }
};

const createNewHeroe = async (req, res) => {
  const {body} = req;
  if (
    !body.nombre ||
    !body.descripcion ||
    !body.img ||
    !body.int ||
    !body.str ||
    !body.dur ||
    !body.spe ||
    !body.pow ||
    !body.com 
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

  const newHeroe = {
    nombre: body.nombre,
    descripcion: body.descripcion,
    img: body.img
  };

  try {
    const createdHeroe = await heroeService.createNewHeroe(newHeroe);
    res.status(201).send({status: "OK", data: createdHeroe});
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED",
              message: "Error al realizar la peticion",
              data: {error:error?.message || error}});
  }
};

const updateOneHeroe = async (req, res) => {
  const {
    body,
    params: {heroeId},
  } = req;

  if (!heroeId) {
    return res
    .status(400)
    .send({
      status: "FAILED",
      data: { error: "Parameter ':heroeId' can not be empty" },
    });
  }

  try {
    const updatedHeroe = await heroeService.updateOneHeroe(heroeId, body);
    if (!updatedHeroe) {
      return res
      .status(404)
      .send({
        status: "FAILED",
        data: { error: `Can´t find heroe with the id '${heroeId}'`} });
      }

      res.send({ status: "OK", data: updatedHeroe});
  
    } catch (error) {
      res
      .status(error?.status || 500)
      .send({ status: "FAILED",
      message: "Error al realizar la peticion:",
      data: { error: error?.message || error} });
    }
  };

  const deleteOneHeroe = async (req, res) => {
  const { params: {heroeId} } = req;

  if (!heroeId) {
    return res
    .status(400)
    .send({
      status: "FAILED",
      data: { error: "Parameter ':heroeId' can not be empty" },
    });
  }

  try {
    const deletedHeroe = await heroeService.deleteOneHeroe(heroeId);
    if (!deletedHeroe) {
      return res
      .status(404)
      .send({
        status: "FAILED",
        data: { error: `Can´t find heroe with the id '${heroeId}'`} });
      }

      res.status(200).send({ status: "OK", data: deletedHeroe});
  
    } catch (error) {
      res
      .status(error?.status || 500)
      .send({ status: "FAILED",
      message: "Error al realizar la peticion:",
      data: { error: error?.message || error} });
    }
  };

module.exports = {getAllHeroes, getOneHeroe, createNewHeroe, updateOneHeroe, deleteOneHeroe}