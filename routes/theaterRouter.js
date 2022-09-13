const express = require('express');
const theaterController = require('../controllers/theaterController');
const router = express.Router();

router.get('/location', theaterController.getLocation);
router.get('/movie', theaterController.getByMovieId);


module.exports = {
    router
};