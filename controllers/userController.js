const userService = require('../services/userService');

const errorhandler = (err,res) => {
    return res.status(err.statusCode || 500).json({ message : err.message });
};

const logInWithKakao = async (req, res) => {
    try{
        const accessToken = req.headers.authorization;

        const token = await userService.logInWithKakao(accessToken);

        res.status(200).json({ authorization: token, message : "LOGIN_SUCCESS" });

    } catch(err){
        errorhandler(err, res);
    };
};

const getUserDetail = async(req, res) => {
    try{
        const user = req.user;

        const detail = await userService.getUserDetail(user);
        
        res.status(200).json(detail);

    }catch(err){
        errorhandler(err, res);
    };
};

module.exports = {
    logInWithKakao,
    getUserDetail
};