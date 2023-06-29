const express = require("express");
const router = express.Router();
const fs = require("fs");

const PATH_ROUTES = __dirname; //LA Ruta donde se encuentra ese archivo

const removeExtension = (fileName) => {
    //TODO tracks.js [tracks, js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => { //leemos el directorio
    const name = removeExtension(file);
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`));//Haga uso del archivo 
    } else {

    }
});



module.exports = router