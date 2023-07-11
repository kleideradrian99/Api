const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("../utils/handlePropertiesEngine");
const propertieskey = getProperties()

/**
 * Debes de passr el objeto del usuario
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign({
        [propertieskey.id]: user[propertieskey.id],
        role: user.role
    },
        JWT_SECRET, {
        expiresIn: "2h"
    }
    );
    return sign;
};

/**
 * Debes de pasar el token de session
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (e) {
        return null
    }
};

module.exports = {
    tokenSign,
    verifyToken
}