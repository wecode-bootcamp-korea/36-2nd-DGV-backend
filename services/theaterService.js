const theaterDao = require('../models/theaterDao')

const getLocation = async () => {
    return await theaterDao.getLocation();
};

const getListByMovieId = async (movieId) => {
    return await theaterDao.getListByMovieId(movieId); 
};

module.exports ={
    getLocation,
    getListByMovieId
}