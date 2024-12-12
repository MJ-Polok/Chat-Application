import express from "express";
import { checkUser, login, logout, signup, updateProfile,  } from "../controllers/authControllers.js";
import { protectRoute } from "../middleware/protectAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/update-profile", protectRoute, updateProfile);
router.post("/check", protectRoute, checkUser);

export default router;