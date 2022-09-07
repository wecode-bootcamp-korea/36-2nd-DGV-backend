const {MySQLDatabase} =require('./database')

const errorHandler = () => {
    const err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500; 
    throw err;
};
 
const getTitle = async () => {
    try{
        return await MySQLDatabase.query(` 
        SELECT 
            id,
            title,
            thumbnail_image_url image
        FROM movies;
        `);
    } catch (err) {
        errorHandler();
    }
};

const getDetail = async (movieId) => {
    try{
        return await MySQLDatabase.query(`
        SELECT
            m.id,
            m.title,
            m.eng_title,
            DATE_FORMAT(m.opening_date, '%Y-%m-%d') opening_date,
            m.running_time,
            m.genre,
            m.description,
            m.rating_week,
            m.thumbnail_image_url,
            JSON_objectAGG(i.id, i.image_url) as images
        FROM
            movies m
        inner join images i 
            ON m.id = i.movie_id
        where m.id = ${movieId};
        `);
    } catch (err) {
        errorHandler();
    }
};

const orderByBase = async (orderBase) => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            m.id,
            m.title,
            m.eng_title,
            m.description,
            m.thumbnail_image_url
        FROM movies m
        ORDER BY ${orderBase} ASC
        `)
    } catch (err) {
        errorHandler();
    }
};

const getListByLocationName = async (locationName) => {
    try {
        return await MySQLDatabase.query(`
        SELECT DISTINCT
            m.id,
            m.title,
            m.thumbnail_image_url image
        FROM
            movies_theaters mt
            LEFT JOIN movies m ON mt.movie_id = m.id
            LEFT JOIN theaters t ON mt.theater_id = t.id
            LEFT JOIN location l ON l.id = t.location_id
        WHERE
            l.name = ${locationName};
        `)
    } catch (err) {
        errorHandler();
    }
};

const getListBySubLocationName = async (subLocationName) => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            m.id,
            m.title,
            m.thumbnail_image_url image
        FROM movies_theaters mt
        LEFT JOIN movies m ON mt.movie_id = m.id
        LEFT JOIN theaters t ON mt.theater_id = t.id
        LEFT JOIN sub_location sl ON sl.id = t.sub_location_id
        WHERE sl.name = ${subLocationName};
        `)
    } catch (err) {
        errorHandler();
    }
};

const getListByMovieIdAndSubLocation = async (movieId, subLocationName) => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            mt.id,
            t.auditorium,
            t.seats,
            area.date date,
            area.time time
        FROM
            movies_theaters mt 
        LEFT JOIN theaters t ON mt.theater_id = t.id
        LEFT JOIN sub_location sl ON t.sub_location_id=sl.id
        right join  
        (SELECT
            dateList.formedDate date,
            JSON_ARRAYAGG(dateList.formedTime) time
            FROM
                (SELECT
                    DATE_FORMAT(mt.start_time, '%Y, %c, %e') formedDate,
                    DATE_FORMAT(mt.start_time, '%h:%i') formedTime
                FROM
                    movies_theaters mt 
                LEFT JOIN theaters t ON mt.theater_id = t.id
                LEFT JOIN sub_location sl ON t.sub_location_id=sl.id) dateList
            GROUP BY date) area on area.date = DATE_FORMAT(mt.start_time, '%Y, %c, %e')
        where mt.movie_id = ${movieId}
        and sl.name=${subLocationName} 
        `)
    } catch (err) {
        errorHandler();
    }
};

module.exports ={
    getTitle,
    orderByBase,
    getDetail,
    getListByLocationName,
    getListBySubLocationName,
    getListByMovieIdAndSubLocation
}