const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie'
    },
    id :{
        type: Number
    }, 
    title:{
        type: String,
        required: true
    },
    year:{
        type: Date
    },
    genres: {
        type: [String]
    },
    ratings:{
        type: [Number]
    },
    poster:{
        type: String
    },
    contentRating:
    {
        type: Number
    },
    duration:{
        type: String
    },
    releaseDate:{
        type: Date,
    },
    averageRating:{
        type: Number
    },
    originalTitle:{
        type: String
    },
    storyline:{
        type: String
    },
    actors :{
        type: [String]
    },
    imdbRating:
    {
        type: Number
    },
    posterurl:
    {
        type:String
    }
});

module.exports = Movie = mongoose.model('movies',MovieSchema);