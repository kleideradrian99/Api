const {handleHtppError} = require("../utils/handleError")

const authMiddleware = (req, res,next)=>{
    try {
        
    } catch (error) {
        handleHtppError(res,"NOT_SESSION",401);
    }
}

module.exports= authMiddleware;