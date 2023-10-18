const mongoose = require("./connection")
const express = require("express")
const app = express()
const { Movie } = require("./models/movieModel")


app.use(express.static(__dirname + '/views'));
//We are looking in to the entire folder views to be able to grab the css along with our html

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('homepage.ejs')
})

const movieRouter = require("./controllers/moviecontroller")
app.use("/movies", movieRouter)


app.listen(`8000`, () => {
    console.log(`Listening!`)
})