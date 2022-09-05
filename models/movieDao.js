const {MySQLDatabase} =require('./database')

const errorHandler = () => {
    const err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500; 
    throw err;
};
 
const getMovieDetail = async (movieId) => {
    try{
        return await MySQLDatabase.query(` 
        SELECT distinct
            m.id movieId,
            m.title,
            m.eng_title,
            m.opening_date,
            m.running_time,
            m.genre,
            m.description,
            m.rating_week,
            m.thumbnail_image_url thumbnailImage,
            i.obj images
        FROM
            movies m
            LEFT JOIN
            (SELECT
            movie_id,
            JSON_OBJECTAGG(id, image_url) as obj from images group by movie_id) i
            ON m.id = i.movie_id
        where
            m.id = ${movieId};
        `);
    } catch (err) {
        errorHandler();
    }
};

const getListByRating = async () => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            m.id,
            m.title,
            m.eng_title,
            m.description,
            m.thumbnail_image_url
        FROM movies m
        ORDER BY m.rating_week DESC
        LIMIT 7;
        `)
    } catch (err) {
        errorHandler();
    }
};

const getListByOpeningDate = async () => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            m.id,
            m.title,
            m.eng_title,
            m.description,
            m.thumbnail_image_url
        FROM movies m
        ORDER BY m.opening_date ASC
        LIMIT 7;
        `)
    } catch (err) {
        errorHandler();
    }
};

module.exports = {
    getMovieDetail, 
    getListByRating,
    getListByOpeningDate    
};