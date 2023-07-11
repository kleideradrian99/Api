const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt")
const { handleHtppError } = require("../utils/handleError")
const { usersModel } = require("../models");
const { compare } = require("bcryptjs");

//Este controlador es el encargado de registrar un usuario
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser,
        };
        res.status(201)
        res.send({ data });
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
};

//Este controlador es el encargado de login
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);//Cura la data para que solo llegue el email y password
        const user = await usersModel.findOne({ email: req.email }).select('password name role email');
        if (!user) {
            handleHtppError(res, "ERROR_NO_EXIST_USER", 404);
            return
        }
        const hashPassword = user.get('password');

        const check = await compare(req.password, hashPassword);//Retorna True or False
        if (!check) {
            handleHtppError(res, "PASSWORD_INVALID", 401);
            return
        }
        user.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({ data })
    } catch (error) {
        handleHtppError(res, "ERROR_LOGIN_USER");
    }
}

module.exports = { registerCtrl, loginCtrl }