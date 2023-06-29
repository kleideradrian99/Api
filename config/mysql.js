const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;


const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        host,
        dialect: 'mysql',
    }
);

const dbConnectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log('**Mysql Coneccion Correcta**')
    } catch (e) {
        console.log('Mysql Error de Conexion', e);
    }
};

module.exports = { sequelize, dbConnectMysql }