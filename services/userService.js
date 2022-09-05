const jwt = require('jsonwebtoken');
const userDao = require('../models/userDao');

const logInWithKakao = async (kakaoUser) => {
    const user = await userDao.getUserByEmail(kakaoUser);

    if(user){
        const jwtToken = jwt.sign({ sub: user.kakao_id, userName: user.nickname, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1h' });
        return jwtToken;
    };

    await userDao.createUser(kakaoUser);
};

module.exports = {
    logInWithKakao, 
};