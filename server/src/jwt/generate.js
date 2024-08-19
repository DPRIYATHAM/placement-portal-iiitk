const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId, userRole}, process.env.JWT_SECRET, {expiresIn: "15d"} , (err, token) => {
        if (err) {
            console.error('Error in generating token:', err.message);
            return res.status(500).json({error: "Internal Server Error"});
        }
    });

    res.cookie('jwt', token, {
        maxAge: 1*24*60*60*1000, // 1 day
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "production"
    });

}

module.exports = generateTokenAndSetCookie;