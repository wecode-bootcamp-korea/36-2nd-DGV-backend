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

module.exports ={
    getTitle,
    getDetail
}