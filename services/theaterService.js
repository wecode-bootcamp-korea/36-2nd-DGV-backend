const theaterDao = require('../models/theaterDao')

const getLocation = async () => {
    return await theaterDao.getLocation();
};

module.exports ={
    getLocation
}