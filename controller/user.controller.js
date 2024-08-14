
import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        
        // Hash the password
        const hashPassword = await bcryptjs.hash(password, 10);
        
        // Create a new user with the hashed password
        const createdUser = new User({
            fullname,
            email,
            password: hashPassword // Use the hashed password here
        });
        
        await createdUser.save();
        res.status(201).json({ message: "User created successfully", user:{
         _id: createdUser._id,
         fullname: createdUser.fullname,
         email: createdUser.email,
        } });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        // Check if the user exists and if the password matches
        if (!user || !(await bcryptjs.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
