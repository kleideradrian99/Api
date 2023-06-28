const express = require("express");
const { loginCtrl, registerCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth")

// Crea un registro
//  Ruta localhost:3001/api/auth/login
//  Ruta localhost:3001/api/auth/register

router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);


module.exports = router