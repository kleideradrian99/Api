require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.port || 3000

// Invoco a las rutas
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log('Tu app esta lista port: ' + port)
})

dbConnect()

//1. npm i
//2. npm i express
//3. npm i cors dotenv multer -S
//correr node app.js
//npm run dev
// ``