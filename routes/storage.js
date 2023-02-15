const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");
const { createItem, getItem, getItems, deleteItem } = require("../controllers/storage");

//Crear
router.post("/", uploadMiddleware.single("myFile"), createItem);
// Listas los items
router.get("/", getItems);
// Obtener detalle
router.get("/:id", validatorGetItem, getItem);
// Elimitar un registro
router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router;