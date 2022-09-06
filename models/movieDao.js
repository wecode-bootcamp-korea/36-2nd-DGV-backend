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

module.exports ={
    getTitle
}