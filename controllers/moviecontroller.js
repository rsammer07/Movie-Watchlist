const express = require("express")
const router = express.Router()


const Movies = require("../models/movieModel")
//get all movies
router.get("/", async (req, res, next) => {
    try {
        const movies = await Movies.find()
        res.render("/movies", { movies })
    } catch (error) {
        next(error)
    }
})
//get movies by title
router.get("/:title", async (req, res, next) => {
    try {
        const title = req.params.title;
        const movie = await Movies.find({ title: title });

        if (movie.length > 0) {
            res.render("movie", { movie: movie[0] });
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        next(error);
    }
});

//send new movie form
router.get("/new", async(req, res, next) => {
    try {
        res.render("/newmovie")
    } catch (error) {
        next(error)
    }
})

//send update movie form
router.get("/update", async(req, res, next) => {
    try {
        res.render("/updatemovie")
    } catch (error) {
        next(error)
    }
})

//post new movies
router.post("/", async(req, res, next) => {
    try {
        const createdMovie = await Movies.create({
            title: req.body.title,
            img: req.body.image,
            watched: req.body.watched,
            rating: req.body.rating
        })
        res.render("/newmovie", { createdMovie })
    } catch (error) {
        next(error)
    }
})

//update movie by title
router.put("/", async(req, res, next) => {
    try {
        const filter = {
            _title: req.params.title
        }
        const data = {
            title: req.body.title,
            img: req.body.img,
            watched: req.body.watched,
            rating: req.body.rating
        }
        const updatedMovie = await Movies.findOneAndUpdate(filter, data, { new: true })
        res.redirect("/")
    } catch (error) {
        next(error)
    }
})

//delete movies by title

router.delete("/:title", async(req, res, next) => {
    try {
        await Movies.FindOneAndDelete({ title: title })
        res.redirect("/movies")
    } catch (error) {
        next(error)
    }
})

module.exports = router