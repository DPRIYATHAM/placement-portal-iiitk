const jwt = require('jsonwebtoken');
const Creds = require('../models/studentCred');
const Student = require('../models/studentModel');
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
        let user = await Student.findOne({ creds: decoded.userId })
                                // .populate('creds', '-password'); maybe add the creds data if needed
        const creds = await Creds.findById(decoded.userId).select('-password');

        if (!user) {
            if (!creds) {
                return res.status(401).json({ error: "Not authorized, user not found" });
            }

            req.user = { creds, profileComplete: false };
        } else {
            req.user = { creds, profileComplete: true };
        }
        next();
    }
    catch(error)
    {
        console.error('Error in protectRoute middleware:', error.message);
        res.status(401).json({error: "Internal Server Error"});      
    }
}

module.exports = protectRoute;