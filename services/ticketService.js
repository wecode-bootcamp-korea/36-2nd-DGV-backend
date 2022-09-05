const ticketDao = require('../models/ticketDao')

const getMoviesTitle = async () => {
    return await ticketDao.getMoviesTitle();
};

const getLocations = async () => {
    return await ticketDao.getLocations();
};

const getListByMovieId = async (movieId) => {
    return await ticketDao.getListByMovieId(movieId);
};

const getMovieByLocationName = async (locationName) => {
    return await ticketDao.getMovieByLocationName(locationName);
};

const getSubLocationByLocationName = async (locationName) => {
    return await ticketDao.getSubLocationByLocationName(locationName);
};

const getListBySubLocationName = async (subLocationName) => {
    return await ticketDao.getListBySubLocationName(subLocationName);
};

const getListByTwoOptions = async (movieId, subLocationName) => {
    return await ticketDao.getListByTwoOptions(movieId, subLocationName);
};

module.exports ={
    getMoviesTitle,
    getLocations,
    getListByMovieId,
    getMovieByLocationName,
    getSubLocationByLocationName,
    getListBySubLocationName,
    getListByTwoOptions
}

