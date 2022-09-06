const movieDao = require('../models/movieDao')

const getTitle = async () => {
    return await movieDao.getTitle();
};

const getListByLocationName = async (locationName) => {
    return await movieDao.getListByLocationName(locationName);
};

const getListBySubLocationName = async (subLocationName) => {
    return await movieDao.getListBySubLocationName(subLocationName);
};

const getListByMovieIdAndSubLocation = async (movieId, subLocationName) => {
    return await movieDao.getListByMovieIdAndSubLocation(movieId, subLocationName);
};

const orderByBase = async (orderBase) => {
    return await movieDao.orderByBase(orderBase);
};

const getDetail = async (movieId) => {
    return await movieDao.getDetail(movieId);
};

module.exports = {
    getTitle,
    getListByLocationName,
    getListBySubLocationName,
    getListByMovieIdAndSubLocation,
    orderByBase,
    getDetail
};