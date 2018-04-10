const fs = require('fs')
const db = require('../config/dataBase')
const utils = require('../utils/default')
const viewMoviePath = '/views/viewAll.html'

module.export = (req, res) => {
    if(req.url.startsWith('/viewAllMovies') && req.method === 'GET') {
        fs.readFile(viewMoviePath, 'utf8', (err, data) => {
            if(err) {
                utils.defaultFailedReq(res, err)
                return
            }
            let movieArr = []
            db.sort(utils.compareMovies)
            for(let movie of db) {
                movieArr.push(
                    `<div class="movie">
                        <a href="/movies/details/${db.indexOf(movie)}">
                            <img class="moviePoster" src="${decodeURIComponent(movie.moviePoster)}"/>
                        </a>         
                    </div>`)
            }
            let html = data.replace('<div id="replaceMe">{{replaceMe}}</div>', moviesArr.join(''))
            utils.defaultSuccessReq(res, html, 'text/html')
        })
    } else {
        return true
    }
}