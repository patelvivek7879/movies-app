const { response } = require('express');
const express = require('express');
const router = express.Router();

const Movie = require('../../models/Movie');

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find().populate('movie', ["title"]);
        console.log(movies.length);

        res.json(movies);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

router.get("/movie", async (req, res) => {
    try {
        let id = "573a1390f29313caabcd50e5";
        const movie = Movie.findById({ "_id": id });
        console.log(movie);
        res.send("Get movie by id ");
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Server Error");
    }
});

router.post("/updateMovie", async (req, res) => {

    let id = req.body.id;
    let year = req.body.year;
    let imdb = req.body.imdb;
    let cast = req.body.cast;
    let genres = req.body.genres;

    let movieFields = {};

    if(year) movieFields.year = year;
    if(imdb) movieFields.imdb = imdb;
    if(cast) movieFields.cast = cast;
    if(genres)  movieFields.genres =genres;

    let date = new Date();
    console.log(date.getFullYear()-year);
    
    try {
        const movie = await Movie.findByIdAndUpdate({ "_id": id }, {
            "$set":
            {                
            "year": movieFields.year,
            "imdb": movieFields.imdb,
            "cast": movieFields.cast, 
            "genres": movieFields.genres 
            },
        },
        {
            new: true,
            useFindAndModify: false,
        });
    res.json(movie);
    }catch (error) {
    res.status(500).send({ "success": "false", "error": error.message });
    }
});

router.post("/", (req, res) => {
    res.send({ "status": "All Ok" })
});

module.exports = router;