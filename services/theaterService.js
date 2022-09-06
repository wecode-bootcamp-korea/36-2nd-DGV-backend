const theaterDao = require('../models/theaterDao')

const getListByMovieId = async (movieId) => {

    const lists = await theaterDao.getListByMovieId(movieId);
    for (const list of lists){
        list.sub = JSON.parse(list.sub)
    }
    return lists
};

module.exports ={
    getListByMovieId
}