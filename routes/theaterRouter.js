const express = require('express');
const theaterController = require('../controllers/theaterController');
const router = express.Router();

router.get('/movies', theaterController.getMovies);

module.exports = {
    router
};