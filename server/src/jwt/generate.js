const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId  }, process.env.JWT_SECRET, { expiresIn: "15d" });
        res.cookie('jwt', token, {
            maxAge: 1*24*60*60*1000, // 1 day
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "production"
        });

    }
    catch (error) {
        console.error('Error in generateTokenAndSetCookie:', error.message);
        res.status(500).json({ error: "Internal Server error while generating token" });
    }
    

}

module.exports = generateTokenAndSetCookie;