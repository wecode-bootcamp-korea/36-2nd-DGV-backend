const theaterService = require('../services/theaterService');
const movieService = require('../services/movieService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const getMovies = async (req, res) => {
    try {
        const movies= await movieService.getTitle();
        const location = await theaterService.getLocation();
        return res.status(200).json({
            movies: movies,
            theaters: location
        });
    } catch(err) {
        errorhandler(err, res);
    }
};

const getMovieById = async (req, res) => {
    try {
        
        const {movieId} = req.query
        
        const movies= await movieService.getTitle();
        const location = await theaterService.getListByMovieId(movieId);
        return res.status(200).json({
            movies: movies,
            theaters: location
        });
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getMovies,
    getMovieById
};
