const express = require('express');
const router = express.Router();

const Movie = require('../../models/Movie');


router.get("/",async (req,res)=>{
    try{
        const movies=await Movie.find().populate('movie',["title"]);
        console.log(movies.length);
        
        res.json(movies);

    }catch(error)
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

router.get("/movie/:id",(res,req)=>{
    try{
        const movie = Movie.findById({_id: req.params.id});
        res.send("update the movie");
    }catch(error)
    {
        console.log(error.message);
        res.status(400).send("error in server");
    }
});

module.exports = router;