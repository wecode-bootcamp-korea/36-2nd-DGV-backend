const movieDao = require('../models/movieDao')

const getTitle = async () => {
    return await movieDao.getTitle();
};

const orderByBase = async (orderBase) => {
    return await movieDao.orderByBase(orderBase);
};

module.exports = {
    getTitle,
    orderByBase
};