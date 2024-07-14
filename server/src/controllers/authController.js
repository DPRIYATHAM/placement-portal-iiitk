import User from '../models/userModel.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const logout = async(req, res) => {
    try{
        res.cookie('jwt',"",{maxAge: 0});
        res.status(200).json({message: "User logged out successfully"});

    }catch{
        console.error('Error in logout controller:', error.message);
        res.status(500).json({error: "Internal Server error while logging out user"});        
    }

};


export const login = async(req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
    
        if (!user){
            return res.status(400).json({error: "Invalid username"});
        }
        if (user.password !== password){
            return res.status(400).json({error: "Invalid password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            username : user.username,
            message: "User logged in successfully"
        });
        

    }catch(error){
        console.error('Error in login controller:', error.message);
        res.status(500).json({error: "Internal Server error "});        

    }

};
