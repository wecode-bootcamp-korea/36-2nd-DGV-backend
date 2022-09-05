
const movieService = require('../services/movieService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const getDetail = async (req, res) => {
    try {
        const { movieId } = req.params
        
        const listByMovieId = await movieService.getMovieDetail(movieId);
        return res.status(200).json(listByMovieId);
       
    } catch(err) {
        errorhandler(err, res);
    }
};

const getMain = async (req, res) => {
    try {
        const getListByRating = await movieService.getListByRating();
        const getListByOpeningDate = await movieService.getListByOpeningDate();

        return res.status(201).json({
            listByRating:getListByRating,
            listByOpeningDate:getListByOpeningDate
        });
    } catch (err) {
        errorhandler(err, res);
    }
};

// const getListByRating = async (req, res) => {
//     try {
//         const getListByRating = await movieService.getListByRating();

//         return res.status(201).json(getListByRating);
//     } catch (err) {
//         errorhandler(err, res);
//     }
// };

// const getListByOpeningDate = async (req, res) => {
//     try {
//         const getListByOpeningDate = await movieService.getListByOpeningDate();

//         return res.status(201).json(getListByOpeningDate);
//     } catch (err) {
//         errorhandler(err, res);
//     }
// };

module.exports = {
    getDetail, 
    getMain
    // getListByRating,
    // getListByOpeningDate    
};
