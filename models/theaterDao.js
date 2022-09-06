const {MySQLDatabase} =require('./database')

const errorHandler = () => {
    const err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500; 
    throw err;
};

const getLocation = async () => {
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
           		 theaters t 
            LEFT JOIN location l ON l.id = t.location_id
            LEFT JOIN sub_location sl ON sl.id = t.sub_location_id) area
        GROUP BY location) a on a.main = location.name
        order by location.id asc
        `);
    } catch (err) {
        errorHandler();
    }
};

module.exports ={
    getLocation
}