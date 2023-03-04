const bcryptjs = require("bcryptjs")

const encrypt = async(passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10); // Encriptar
    return hash;
};

const compare = async(passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = {
    encrypt,
    compare
}