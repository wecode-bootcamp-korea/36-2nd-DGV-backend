const userDao = require("../models/userDao");
const jwt = require("jsonwebtoken")

const validationToken = async(req, res, next) => {
    try{
        const token = req.headers.authorization;
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.sub;
        const userEmail = decoded.email;
        const checkUser = await userDao.getUserById(userId);

        if(!checkUser) 
            return res.status(400).json({message: "USER_NOT_FOUND"})
        req.user = {kakao_id: userId, email: userEmail};
        next();
    } catch(err){
        next(err);
    }
};

module.exports= {
    validationToken
};