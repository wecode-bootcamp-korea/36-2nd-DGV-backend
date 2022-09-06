const movieService = require('../services/movieService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const getTitle = async (req, res) => {
    try {
        
        const movieTitle= await movieService.getTitle();
        return res.status(200).json(movieTitle);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getTitle 
};
