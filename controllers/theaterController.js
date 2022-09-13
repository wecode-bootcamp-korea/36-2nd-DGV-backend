const theaterService = require('../services/theaterService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const getLocation = async (req, res) => {
    try {
        const location = await theaterService.getLocation();
        return res.status(200).json({
            theaters: location
        });
    } catch(err) {
        errorhandler(err, res);
    }
};

const getByMovieId = async (req, res) => {
    try {
        
        const {movieId} = req.query

        if(!movieId){
            const err = new Error ('query_notfound')
            err.statusCode=400;
            throw err;
        }
        
        const location = await theaterService.getListByMovieId(movieId);
        return res.status(200).json({
            theaters: location
        });
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getLocation,
    getByMovieId
};