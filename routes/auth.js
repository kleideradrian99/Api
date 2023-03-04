const express = require("express");
const { loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister } = require("../validators/auth")

// Crea un registro
//  Ruta localhost:3001/api/auth/login
//  Ruta localhost:3001/api/auth/register

router.post("/register", validatorRegister, loginCtrl);


module.exports = router