// to add: add salt to password



const bcrypt = require('bcrypt');

const StudentCred = require('../models/studentCred.js');


const generateTokenAndSetCookie = require('../jwt/generate.js');

const logout = async(req, res) => {
    try{
        res.cookie('jwt',"",{maxAge: 0});
        res.status(200).json({message: "User logged out successfully"});

    }catch{
        console.error('Error in logout controller:', error.message);
        res.status(500).json({error: "Internal Server error while logging out user"});        
    }

};


const login = async (req, res) => {
    const { username, password, userType } = req.body;

    if (!['student', 'coordinator'].includes(userType)) {
        return res.status(400).json({ error: "Invalid user type" });
    }

    try {
        // TODO : Add CoordinatorCred model
        const Model = userType === 'student' ? StudentCred : StudentCred;
        const user = await Model.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            generateTokenAndSetCookie(user._id, res);
            return res.status(200).json({
                _id: user._id,
                username: user.username,
                userType,
                message: "User logged in successfully"
            });
        }

        res.status(400).json({ error: "Invalid username or password" });

    } catch (error) {
        console.error('Error in login controller:', error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};


// export
module.exports = {
    login,
    logout
};