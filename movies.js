const axios = require('axios')

function moviesHandler(req,res)
{
    const name = req.query.name
    const moviesURL = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1&include_adult=false`
    
    axios
    .get(moviesURL)
    .then(arr => {
        console.log(arr.data);
        let newMovie = arr.data.results.map((item)=>
        {
            return new Movies(item)
        })
        res.send(newMovie)
    })
    .catch(error => {
        console.log(error);
    })
    class Movies {
        constructor(item) {
            this.title=item.title
            this.release_date=item.release_date
            this.overview=item.overview
            this.popularity=item.popularity
            this.vote_average=item.vote_average
            this.vote_count=item.vote_count
        }
    }
}

module.exports = moviesHandler;