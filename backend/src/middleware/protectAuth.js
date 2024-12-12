import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectRoute = async (req, res, next) => {
    const token = req.cookies.jwtToken

    try {
        if (!token) {
            return res.status(400).json({ message: "User not authenticated! No token provided!" });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if (!decoded) {
            return res.status(400).json({ message: "User not authorized! Invalid token!" });
        }
        
        const user = await User.findById(decoded.userId).select("-password")
        
        
        if (!user) {
            return res.status(400).json({ message: "User not founded!" });
        }
        
        req.user = user
        
        next()
        
    } catch (error) {
        console.log("Error in protected middleware: ", error.message);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
};