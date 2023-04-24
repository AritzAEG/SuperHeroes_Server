const Heroe = require('../database/heroe');

const getAllHeroes = async () => {
  try
  {
    const allHeroes = Heroe.getAllHeroes();
    return allHeroes;
  }
  catch (error)
  {
    throw error;
  }
};

const getOneHeroe = async (heroeId) => {
  try
  {
    const heroe = Heroe.getOneHeroe(heroeId);
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
    const createdHeroe = Heroe.createNewHeroe(newHeroe);
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
    const updatedHeroe = Heroe.updateOneHeroe(heroeId, changes);
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
    let deletedHeroe = await Heroe.deleteOneHeroe(heroeId);
    return deletedHeroe;
  }
  catch (error)
  {
    throw error;
  }
}

module.exports = {getAllHeroes, getOneHeroe, createNewHeroe, updateOneHeroe, deleteOneHeroe};