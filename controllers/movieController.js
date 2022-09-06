const movieService = require('../services/movieService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const getTitle = async (req, res) => {
    try {
        
        const movieTitle= await movieService.getTitle();
        return res.status(200).json(movieTitle);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListByLocationName = async (req, res) => {
    try {
        const { locationName } = req.query

        const listByLocationName = await movieService.getListByLocationName(locationName);
        
        return res.status(200).json({
            movieList:listByLocationName
        });
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListBySubLocationName = async (req, res) => {
    try {
        const { subLocationName } = req.query
        
        const listBySubLocationName = await movieService.getListBySubLocationName(subLocationName);
        return res.status(200).json({movieList: listBySubLocationName});
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListByMovieIdAndSubLocation = async (req, res) => {
    try {
        const { movieId, subLocationName } = req.query
        
        const listByTwoOptions = await movieService.getListByMovieIdAndSubLocation(movieId, subLocationName);
        return res.status(200).json({movieList:listByTwoOptions});
       
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getTitle,
    getListByLocationName,
    getListBySubLocationName,
    getListByMovieIdAndSubLocation
};