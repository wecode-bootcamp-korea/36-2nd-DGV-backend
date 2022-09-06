const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getTitle);
router.get('/locations' , movieController.getListByLocationName);
router.get('/sublocation', movieController.getListBySubLocationName);
router.get('/idandsublocation', movieController.getListByMovieIdAndSubLocation);

module.exports = {
    router
};