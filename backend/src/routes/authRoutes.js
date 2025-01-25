import { Router } from "express";
import { checkUser, login, logout, signup, updateProfile, } from "../controllers/authControllers.js";
import { protectRoute } from "../middleware/protectAuth.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkUser);

export default router;