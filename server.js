const express = require('express');
const app = express();
const config = require('config');
const mongoose = require("mongoose");
const path = require('path');

require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

app.use(express.json({extended: false}));


app.get("/",(req,res)=>{
    res.send("This is express");
})

app.use("/api/movies",require("./routes/api/movies"));
app.use("/api/movie/:id",require("./routes/api/movies"));

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;
app.listen(port,(error)=>{
    if(error)
    {
        console.log(`Some error occured ${error}`);
    }
    console.log(`Server is running on ${port}`)
});