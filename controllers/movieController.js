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

const orderByBase = async (req, res) => {
    try {
        const { orderBase } = req.query
        
        const orderList = await movieService.orderByBase(orderBase);
        return res.status(201).json({
            orderList: orderList
        });

const getDetail = async (req, res) => {
    try {
        const { movieId } = req.params
        
        const movieDetail = await movieService.getDetail(movieId);
        return res.status(200).json(movieDetail);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

module.exports = {
    getTitle,
    orderByBase,
    getDetail
};
