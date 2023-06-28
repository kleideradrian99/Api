const { handleHtppError } = require("../utils/handleError")
const { verifyToken } = require('../utils/handleJwt')
const { usersModel } = require('../models')

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.autorization) {
            handleHtppError(res, "NOT_TOKEN", 401);
            return
        }
        const token = req.headers.autorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if (!dataToken._id) {
            handleHtppError(res, "NOT_ID_TOKEN", 401);
            return
        }

        const user = await usersModel.findById(dataToken._id);
        req.user = user
        next();
    } catch (error) {
        handleHtppError(res, "NOT_SESSION", 401);
    }
}

module.exports = authMiddleware;