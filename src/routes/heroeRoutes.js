const express = require("express");
const router = express.Router();

const heroeController = require("../controllers/heroeController");

router.get("/", heroeController.getAllHeroes);
router.get("/:heroeId", heroeController.getOneHeroe);
router.post("/", heroeController.createNewHeroe);
router.patch("/:heroeId", heroeController.updateOneHeroe);
router.delete("/:heroeId", heroeController.deleteOneHeroe);
module.exports = router;