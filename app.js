require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const { dbConnectMysql } = require("./config/mysql")
const morganBody = require("morgan-body")
const loggerStream = require("./utils/handleLoger")
const app = express()
const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400
    }
})
const port = process.env.port || 3000

// Invoco a las rutas
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log('Tu app esta lista port: ' + port)
});
//Sequelize
//SLACK
//npm i morgan-body -S
//npm i @slack/webhook
(ENGINE_DB === 'nosql') ? dbConnect() : dbConnectMysql();

//sMYSQL_DATABASE=cursonode
//MYSQL_USER=root
//MYSQL_PASSWORD=
//MYSQL_HOST=localhost
//ENGINE_DB=mysql
//1. npm i
//2. npm i express
//3. npm i cors dotenv multer -S
//4. npm i nodemon -g
//correr node app.js
//npm run dev
// ``
//SLACK_WEBHOOK=https://hooks.slack.com/services/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