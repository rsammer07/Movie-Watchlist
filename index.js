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
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/profile', (req, res) => {
    res.render('profile.ejs')
})
app.get('/createaccount', (req, res) => {
    res.render('createaccount.ejs')
})
app.get('/review', (req, res) => {
    res.render('review.ejs')
})
app.get('/error', (req, res) => {
    res.render('error.ejs')
})

app.listen(PORT, (req, res) =>{
    console.log(`Server is running on port ${PORT} ✅`)
})

