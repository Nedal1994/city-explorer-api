const axios = require('axios')

function weatherHandler(req,res)
{
    const name = req.query.name
    const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${name}&key=${process.env.WEATHER_API_KEY}`
    console.log(name);
    axios
    .get(weatherURL)
    .then(arr => {
        let newDay = arr.data.data.map((item)=>
        {
            return new Forecast(item)
        })
        res.send(newDay)  
    })
    .catch(error => {
        console.log(error);
    })
    class Forecast {
        constructor(item) {
            this.date = item.valid_date
            this.description = `Low of ${item.low_temp}, high of ${item.high_temp} with ${item.weather.description}`
        }
    }
}

module.exports = weatherHandler