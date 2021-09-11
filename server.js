'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const weatherHandler = require('./weather')
const moviesHandler = require('./movies')
const server = express();
server.use(cors());

const PORT = process.env.PORT;

// class Forecast {
//     constructor(item) {
//         this.date = item.valid_date
//         this.description = `Low of ${item.low_temp}, high of ${item.high_temp} with ${item.weather.description}`
//     }
// }
// class Movies {
//     constructor(item) {
//         this.title=item.title
//         this.release_date=item.release_date
//         this.overview=item.overview
//         this.popularity=item.popularity
//         this.vote_average=item.vote_average
//         this.vote_count=item.vote_count
//     }
// }

// http://localhost:3200/weather
// http://localhost:3200/movies
server.get('/weather' ,weatherHandler)
server.get('/movies' ,moviesHandler)

// function weatherHandler(req,res)
// {
//     const name = req.query.name
//     const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=Amman&key=${process.env.WEATHER_API_KEY}`
//     console.log(name);
//     axios
//     .get(weatherURL)
//     .then(arr => {
//         let newDay = arr.data.data.map((item)=>
//         {
//             return new Forecast(item)
//         })
//         res.send(newDay)  
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }
 
// function moviesHandler(req,res)
// {
//     const name = req.query.name
//     const moviesURL = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIE_API_KEY}`
    
//     axios
//     .get(moviesURL)
//     .then(arr => {
//         console.log(arr.data);
//         let newMovie = arr.data.data.map((item)=>
//         {
//             return new Movies(item)
//         })
//         res.send(newMovie)
//     })
//     .catch(error => {
//         console.log(error);
//     })
    
// }
    

    server.listen(PORT, () => {
        console.log(`${PORT}`);
    })