const axios = require('axios').default;
const userService = require('../services/userService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const logInWithKakao = async (req, res) => {
    try{
        const ACCESS_TOKEN = req.headers.authorization;

        const { data: kakaoUser } = await axios("https://kapi.kakao.com/v2/user/me",
        {
            headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
            },
        });
        
        await userService.logInWithKakao(kakaoUser);

        const accessToken = await userService.logInWithKakao(kakaoUser);

        res.status(200).json({ authorization: accessToken, message : "LOGIN_SUCCESS" });

    } catch(err){
        errorhandler(err, res);
    };
};

module.exports = {
    logInWithKakao
};