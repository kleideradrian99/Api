const bcryptjs = require("bcryptjs")

//Contrasena sin encriptar
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10); // Encriptar
    return hash;
};

//Pasamos la contrase sin encriptar y la encriptada
const compare = async (passwordPlain, hashPassword) => { //Agarramos el hash para saber si es la clave
    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = {
    encrypt,
    compare
}