const theaterService = require('../services/theaterService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

module.exports = {
    
}