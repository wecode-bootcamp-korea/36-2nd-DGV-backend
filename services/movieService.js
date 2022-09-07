const movieDao = require('../models/movieDao')

const getTitle = async () => {
    return await movieDao.getTitle();
};


const orderByBase = async (orderBase) => {
    return await movieDao.orderByBase(orderBase);
};

const getDetail = async (movieId) => {
    return await movieDao.getDetail(movieId);
};

module.exports = {
    getTitle,
    orderByBase,
    getDetail
};