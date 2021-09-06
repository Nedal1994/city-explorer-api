'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const weatherData = require('./assets/weather.json');

const server = express();
server.use(cors()); 

const PORT = process.env.PORT;

class Forecast
{
    constructor(date,description)
    {
        this.date=date
        this.description=description
    }
}

// http://localhost:3200/weather
server.get('/weather',(req,res)=>{
    const lat = req.query.lat;
    const lon = req.query.lon
    const city_name = req.query.city_name
    const searchQuery = weatherData.find( (item) =>{
        if(item.city_name===city_name && item.lat === lat 
            && item.lon === lon)
            {
                 return item;
            }
        else
        {
            return 'Error'
        }
    })
    let newArr = []
    if(searchQuery !== 'Error')
    {
        searchQuery.data.forEach(item =>
            {
                newArr.push({
                    description :`${item.weather.description}` ,
                     date: `${item.datetime}`, maxTemp :`${item.max_temp}`,
                      minTemp:`${item.min_temp}`
                })
            })
            
    res.send(newArr)
    }
})

server.listen(PORT, () => {
    console.log(`${PORT}`);
})