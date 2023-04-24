const Heroe = require('../models/heroeModel');

const getAllHeroes = async () => {
  try
  {
    const heroes = await Heroe.find();
    return heroes;
  }
  catch (error)
  {
    throw error;
  }
};

const getOneHeroe = async (heroeId) => {
  try
  {
    const heroe = await Heroe.findById(heroeId);
    return heroe;
  }
  catch (error)
  {
    throw error;
  }
};

const createNewHeroe = async (newHeroe) => {
  try
  {
    let heroeToInsert = new Heroe(newHeroe);
    const createdHeroe = await heroeToInsert.save();
    return createdHeroe;
  }
  catch (error)
  {
    throw error;
  }
};

const updateOneHeroe = async (heroeId, changes) => {
  try
  {
    let updatedHeroe = await heroe.findByIdAndUpdate(heroeId,
    {$set:changes},{new:true});
    return updatedHeroe;
  }
  catch (error)
  {
    throw error;
  }
}

const deleteOneHeroe = async (heroeId) => {
  try
  {
    let deletedHeroe = await heroe.findByIdAndRemove(heroeId);
    return deletedHeroe;
  }
  catch (error)
  {
    throw error;
  }
}


module.exports = { getAllHeroes, getOneHeroe, createNewHeroe, updateOneHeroe, deleteOneHeroe};