const express = require("express")
const {
    getAllMovies,
    getMovieByTitle,
    createNewMovie,
    newMovieForm,
    updateMovieForm,
    updateMovieByTitle,
    deletMovieByTitle
} = require("../controllers/moviecontroller")

const router = express.Router()

router.get("/", getAllMovies)

router.get("/:title", getMovieByTitle)

router.get("/newmovie", newMovieForm)

router.get("/update", updateMovieForm)

router.get("/", createNewMovie)

router.post("/", createNewMovie)

router.put("/", updateMovieByTitle)

router.delete("/", deletMovieByTitle)

module.exports = router