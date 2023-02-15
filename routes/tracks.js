const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItems, deleteItems } = require("../controllers/tracks");

// Listas los items
router.get("/", getItems);
// Obtener detalle
router.get("/:id", validatorGetItem, getItem);
// Actualizar item
router.put("/:id", validatorCreateItem, validatorGetItem, updateItems);
// Crea un registro
router.post("/", validatorCreateItem, createItem);
// Elimitar un registro
router.post("/:id", validatorGetItem, deleteItems);

module.exports = router