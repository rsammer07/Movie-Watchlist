const mongoose = require("mongoose")
const express = require("express")
const app = express()
const { DATABASE_URL, PORT } = require("./config");



app.use(express.static(__dirname + '/views'));
//We are looking in to the entire folder views to be able to grab the css along with our html

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('homepage.ejs')
})

app.listen(PORT, (req, res) =>{
    console.log(`Server is running on port ${PORT} ✅`)
})

