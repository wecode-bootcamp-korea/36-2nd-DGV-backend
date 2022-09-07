const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getTitle);
router.get('/list', movieController.orderByBase);
router.get('/location' , movieController.getListByLocationName);
router.get('/sublocation', movieController.getListBySubLocationName);
router.get('/idandsublocation', movieController.getListByMovieIdAndSubLocation);
router.get(':movieId', movieController.getDetail);


module.exports = {
    router
};