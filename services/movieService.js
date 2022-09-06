const movieDao = require('../models/movieDao')

const getTitle = async () => {
    return await movieDao.getTitle();
};

module.exports = {
    getTitle
};