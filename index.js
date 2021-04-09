const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors({ origin: [process.env.CLIENT_ORIGIN, 'http://localhost:3000'] }))

const uri = `mongodb+srv://sam:${process.env.DB_PASSWORD}@cluster1.hyibd.mongodb.net/investmentpropcalcdb?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => console.log("connected to mongoDB"))
    .catch((e) => console.log("whoops, issue connecting to mongoDB:", e))

const PORT = process.env.PORT || 8081

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`)
})