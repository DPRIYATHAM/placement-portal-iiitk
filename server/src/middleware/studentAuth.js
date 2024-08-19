const jwt = require('jsonwebtoken');
const User = require('../models/studentModel.js');

const protectRoute = async (req, res, next) => {
    try{
        let token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Token not found"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded){
            return res.status(401).json({error:"Invalid token"});
        }
        const user = await User.findById(decoded.userId).select('-password');

        if (!user){
            return res.status(401).json({error: "User not found"});
        }
        req.user = user;
        next();
    }
    catch(error)
    {
        console.error('Error in protectRoute middleware:', error.message);
        res.status(401).json({error: "Internal Server Error"});      
    }
}

module.exports = protectRoute;