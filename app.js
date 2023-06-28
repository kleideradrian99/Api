require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const morganBody = require("morgan-body")
const loggerStream = require("./utils/handleLoger")
const app = express()

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
})
//SLACK
//npm i morgan-body -S
//npm i @slack/webhook
dbConnect();

//1. npm i
//2. npm i express
//3. npm i cors dotenv multer -S
//correr node app.js
//npm run dev
// ``