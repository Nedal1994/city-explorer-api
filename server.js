'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const weatherData = require('./assets/weather.json');

const server = express();
server.use(cors());

const PORT = process.env.PORT;

class Forecast {
    constructor(item) {
        this.date = item.valid_date
        this.description = item.weather.description
    }
}

// http://localhost:3200/weather?city_name=Amman&lat=31.9515694&lon=35.9239625
server.get('/weather', (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon
    const city_name = req.query.city_name
    try {
        
        const searchQuery = weatherData.find((item) => 
        {
            if (item.city_name === city_name && item.lat === lat
                && item.lon === lon) 
                {
                return item;
            }
            
        })
        console.log(searchQuery);
        const data = searchQuery.data.map((item)=>
        {
            return new Forecast(item)
        })
        res.json(data)
        // if (searchQuery !== 'Error') {
        //     searchQuery.data.forEach(item => {
        //         newArr.push({
        //             description: `${item.weather.description}`,
        //             date: `${item.datetime}`, maxTemp: `${item.max_temp}`,
        //             minTemp: `${item.min_temp}`
        //         })
        //     })

            // res.send(data)
          }

        catch 
        {
        res.send("Sorry there's an error")
      }
    })

    

    server.listen(PORT, () => {
        console.log(`${PORT}`);
    })