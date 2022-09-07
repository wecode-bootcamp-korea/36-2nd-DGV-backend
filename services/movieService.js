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
    const lists  = await movieDao.getListByMovieIdAndSubLocation(movieId, subLocationName);
    for (const list of lists){
        list.time = JSON.parse(list.time)
    }
    return lists
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