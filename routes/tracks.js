const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItems, deleteItems } = require("../controllers/tracks");

// Listas los items
router.get("/", authMiddleware, getItems);
// Obtener detalle
router.get("/:id", authMiddleware, validatorGetItem, getItem);
// Actualizar item
router.put("/:id", authMiddleware, validatorCreateItem, validatorGetItem, updateItems);
// Crea un registro
router.post("/", authMiddleware, checkRol(["user", "admin"]), validatorCreateItem, createItem);
// Elimitar un registro
router.post("/:id", authMiddleware, validatorGetItem, deleteItems);

module.exports = router