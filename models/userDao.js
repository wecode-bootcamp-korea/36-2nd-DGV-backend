const { MySQLDatabase } =require('./database')

const createUser = async (kakaoUser) => {
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
};

const getUserByEmail = async (userEmail) => {
    const [user] = await MySQLDatabase.query(`
    SELECT  
        kakao_id,
        nickname,
        email,
        profie_image_url
    FROM users
    WHERE email = "${userEmail}";
    `);

    return user;
};

const getUserById = async (id) => {
    const [user] = await MySQLDatabase.query(`
    SELECT
        kakao_id,
        email,
        nickname,
        profie_image_url
    FROM users
    WHERE kakao_id = "${id}";
    `);

    return user;
}

module.exports = {
    createUser, 
    getUserByEmail,
    getUserById
};