import express from "express";
import { protectRoute } from "../middleware/protectAuth.js";
import { getMessages, getUserForSidebar, sendMessage } from "../controllers/messageControllers.js";

const router = express.Router();

router.get("/users", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);


export default router;