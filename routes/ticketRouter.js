const express = require('express');
const ticketController = require('../controllers/ticketController');
const router = express.Router();

router.get('/list/all', ticketController.getAllList);
router.get('/list/locations' , ticketController.getListByMovieId);
router.get('/list/movies/location', ticketController.getListByLocationName);
router.get('/list/movies/subLocation', ticketController.getListBySubLocationName);
router.get('/list', ticketController.getListByTwoOptions);

module.exports = {
    router
};