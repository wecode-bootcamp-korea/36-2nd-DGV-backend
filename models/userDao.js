const { MySQLDatabase } =require('./database')

const errorHandler = () => {
    const err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500; 
    throw err;
};
 
const createUser = async (kakaoUser) => {
    try{
        await MySQLDatabase.query(`    
            INSERT INTO users (
                kakao_id,
                nickname,
                email,
                profie_image_url
            ) VALUES (?, ?, ?, ?);`,
            [kakaoUser.id, 
            kakaoUser.properties.nickname,
            kakaoUser.kakao_account.email,
            kakaoUser.properties.profile_image]  
        );
    } catch (err) {
        errorHandler();
    }
};

const getUserByEmail = async (kakaoUser) => {
    try {
        const [user] = await MySQLDatabase.query(`
        SELECT  
            kakao_id,
            nickname,
            email,
            profie_image_url
        FROM users
        WHERE email = "${kakaoUser.kakao_account.email}";
        `);

        return user;
    } catch (err) {
        errorHandler();
    }
};

module.exports = {
    createUser, 
    getUserByEmail,
};