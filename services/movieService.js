const movieDao = require('../models/movieDao')

const getMovieDetail = async (movieId) => {
    return await movieDao.getMovieDetail(movieId);
};

const getListByRating = async () => {
    return await movieDao.getListByRating();
};

const getListByOpeningDate = async () => {
    return await movieDao.getListByOpeningDate();
};

module.exports = {
    getMovieDetail, 
    getListByRating,
    getListByOpeningDate    
};