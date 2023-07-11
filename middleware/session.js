const { handleHtppError } = require("../utils/handleError")
const { verifyToken } = require('../utils/handleJwt')
const { usersModel } = require('../models')
const getProperties = require("../utils/handlePropertiesEngine");
const propertieskey = getProperties()

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHtppError(res, "NOT_TOKEN", 401);
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if (!dataToken) {
            handleHtppError(res, "NOT_PAYLOAD_DATA", 401);
            return
        }

        const query = {
            [propertieskey.id]: dataToken[propertieskey.id]
        }

        const user = await usersModel.findOne(query);
        req.user = user
        next();
    } catch (error) {
        handleHtppError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;