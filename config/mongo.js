const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.set('strictQuery', false);
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log('*** Coneccion Correcta ***')
        } else {
            console.log('*** Error Coneccion ***')
        }
    });
};

module.exports = dbConnect