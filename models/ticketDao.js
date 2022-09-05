const {MySQLDatabase} =require('./database')

const errorHandler = () => {
    const err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500; 
    throw err;
};
 
const getMoviesTitle = async () => {
    try{
        return await MySQLDatabase.query(`    
            SELECT 
                id,
                title
            FROM movies;
        `);
    } catch (err) {
        errorHandler();
    }
};

const getLocations = async () => {
    try{
        return await MySQLDatabase.query(`  
        SELECT
            location.id,
            a.main,
            a.sub 
        from 
            location
        right join
        (SELECT
            area.location main,
            JSON_ARRAYAGG(area.subLocation) sub
        FROM
            (SELECT
                l.name LOCATION,
                sl.name subLocation
            FROM
                movies_theaters mt
            LEFT JOIN theaters t ON t.id = mt.theater_id
            LEFT JOIN location l ON l.id = t.location_id
            LEFT JOIN sub_location sl ON sl.id = t.sub_location_id) area
        GROUP BY location) a on a.main = location.name
        `);
    } catch (err) {
        errorHandler();
    }
};

const getListByMovieId = async (movieId) => {
    console.log(movieId)
    try {
        return await MySQLDatabase.query(`
        SELECT
            location.id,
            a.main,
            a.sub 
        from 
            location
        right join
        (SELECT
            area.location main,
            JSON_ARRAYAGG(area.subLocation) sub
        FROM
            (SELECT
                l.name location,
                sl.name subLocation
            FROM
                movies_theaters mt
            LEFT JOIN theaters t ON t.id = mt.theater_id
            LEFT JOIN LOCATION l ON l.id = t.location_id
            LEFT JOIN sub_location sl ON sl.id = t.sub_location_id
        WHERE
            mt.movie_id = ${movieId}) area
        GROUP BY location) a on a.main = location.name
        `)
    } catch (err) {
        errorHandler();
    }
};

const getMovieByLocationName = async (locationName) => {
    try {
        return await MySQLDatabase.query(`
        SELECT DISTINCT
            m.id,
            m.title
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

const getSubLocationByLocationName = async (locationName) => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            s.id,
            s.name
        FROM
            movies_theaters mt
            LEFT JOIN theaters t ON mt.theater_id = t.id
            LEFT JOIN location l ON l.id = t.location_id
            left JOIN sub_location s ON s.id = t.sub_location_id
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
            m.title
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

const getListByTwoOptions = async (movieId, subLocationName) => {
    try {
        return await MySQLDatabase.query(`
        SELECT
            mt.id,
            t.auditorium,
            t.seats,
            DATE_FORMAT(mt.start_time, '%Y,%m,%d') date,
            DATE_FORMAT(mt.start_time, '%h:%i') time
        FROM movies_theaters mt
        LEFT JOIN theaters t ON mt.theater_id = t.id
        LEFT JOIN sub_location sl ON t.sub_location_id=sl.id
        where mt.movie_id = ${movieId}
        and sl.name=${subLocationName} 
        `)
    } catch (err) {
        errorHandler();
    }
};

module.exports ={
    getMoviesTitle,
    getLocations,
    getListByMovieId,
    getMovieByLocationName,
    getSubLocationByLocationName,
    getListBySubLocationName,
    getListByTwoOptions
}