const Movie = require("../models/movieModel")
const movieData = require("../seed/movies.json")


Movie.deleteMany({})
    .then(() => {
        return Movie.insertMany(movieData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    })