const movieDao = require('../models/movieDao')

const getTitle = async () => {
    return await movieDao.getTitle();
};

const getDetail = async (movieId) => {
    return await movieDao.getDetail(movieId);
};

module.exports = {
    getTitle,
    getDetail
};