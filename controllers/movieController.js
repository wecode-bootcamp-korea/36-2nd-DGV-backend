const movieService = require('../services/movieService');
const theaterService = require('../services/theaterService');

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
            movies:listByLocationName
        });
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListBySubLocationName = async (req, res) => {
    try {
        const { subLocationName } = req.query
        
        const location = await theaterService.getLocation();
        const listBySubLocationName = await movieService.getListBySubLocationName(subLocationName);
        
        return res.status(200).json({
            theaters :location
            ,movies: listBySubLocationName});
        
    } catch(err) {
        errorhandler(err, res);
    }
};


const orderByBase = async (req, res) => {
    try {
        const { orderBase } = req.query
        
        const orderList = await movieService.orderByBase(orderBase);
        
        return res.status(201).json({
            orderList: orderList
        });
    } catch(err) {
        errorhandler(err, res);
    }
};

const getDetail = async (req, res) => {
    try {
        const { movieId } = req.params
        
        const movieDetail = await movieService.getDetail(movieId);
        
        return res.status(200).json(movieDetail);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListByMovieIdAndSubLocation = async (req, res) => {
    try {
        const { movieId, subLocationName } = req.query

        const movieTitle= await movieService.getTitle();
        const location = await theaterService.getLocation();
        const listByTwoOptions = await movieService.getListByMovieIdAndSubLocation(movieId, subLocationName);
        return res.status(200).json({
            movies: movieTitle,
            theaters: location,
            timeList: listByTwoOptions});
       
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getTitle,
    orderByBase,
    getDetail,
    getListByLocationName,
    getListBySubLocationName,
    getListByMovieIdAndSubLocation
};
