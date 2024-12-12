import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign(({ userId }), process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("jwtToken", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        same: "strict",
        secure: process.env.NODE_END !== "development"
    });

    return token;
};