const ticketService = require('../services/ticketService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};


const getAllList = async (req, res) => {
    try {
        const getMoviesTitle = await ticketService.getMoviesTitle();
        const getLocations = await ticketService.getLocations();

        return res.status(201).json({
            title: getMoviesTitle,
            location: getLocations});
    } catch (err) {
        errorhandler(err, res);
    }
};

const getListByMovieId = async (req, res) => {
    try {
        const { movieId } = req.query;
        
        const listByMovieId = await ticketService.getListByMovieId(movieId);
        return res.status(200).json(listByMovieId);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListByLocationName = async (req, res) => {
    try {
        const { locationName } = req.query

        const getMovieByLocationName = await ticketService.getMovieByLocationName(locationName);
        const getSubLocationByLocationName = await ticketService.getSubLocationByLocationName(locationName);
        
        return res.status(200).json({
            movieList:getMovieByLocationName,
            subLocationList: getSubLocationByLocationName});
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListBySubLocationName = async (req, res) => {
    try {
        const { subLocationName } = req.query
        
        const listBySubLocationName = await ticketService.getListBySubLocationName(subLocationName);
        return res.status(200).json(listBySubLocationName);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getListByTwoOptions = async (req, res) => {
    try {
        const { movieId, subLocationName } = req.query
        
        const listByTwoOptions = await ticketService.getListByTwoOptions(movieId, subLocationName);
        return res.status(200).json(listByTwoOptions);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getAllList,
    getListByMovieId,
    getListByLocationName,
    getListBySubLocationName,
    getListByTwoOptions
};
