import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
    connectDB();
});