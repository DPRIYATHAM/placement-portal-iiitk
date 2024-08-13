import jwt from 'jsonwebtoken';
import User from '../models/studentModel.js';

const protectRoute = async (req, res, next) => {
    try{
        let token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Not authorized, no token"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded){
            return res.status(401).json({error:"Not authorized, token failed"});
        }
        const user = await User.findById(decoded.userId).select('-password');

        if (!user){
            return res.status(401).json({error: "Not authorized, user not found"});
        }
        req.user = user;
        next();
    }catch(error){
        console.error('Error in protectRoute middleware:', error.message);
        res.status(401).json({error: "Internal Server Error"});      
    }
}

export default protectRoute;
