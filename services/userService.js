const jwt = require('jsonwebtoken');
const axios = require('axios').default;
const userDao = require('../models/userDao');

const logInWithKakao = async (ACCESS_TOKEN) => {
    const { data: kakaoUser } = await axios("https://kapi.kakao.com/v2/user/me",
        {
            headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
            },
        });

    const usercheck = await userDao.getUserByEmail(kakaoUser);

    if(!usercheck){
        await userDao.createUser(kakaoUser);
    };

    const user = await userDao.getUserByEmail(kakaoUser);

    const jwtToken = await jwt.sign({ sub: user.kakao_id, userName: user.nickname, email: user.email}, process.env.JWT_SECRET, { expiresIn: '24h' });

    return jwtToken;
};

module.exports = {
    logInWithKakao, 
};