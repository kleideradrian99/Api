const { handleHtppError } = require("../utils/handleError")
/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const rolesByUser = user.role; //Agarramos el rol de usuario
        //TODOS LOS ROLES PERMITIDOS
        const checkVaueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));// return true or false Si existe el rol dentro del array
        if (!checkVaueRol) {
            handleHtppError(res, "USER_NOT_PERMISSIONS", 403);
            return;
        }
        next();
    } catch (error) {
        handleHtppError(res, "ERROR_PERMISSIONS", 403);
    }
}

module.exports = checkRol