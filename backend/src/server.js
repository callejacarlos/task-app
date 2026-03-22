import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB (Singleton luego)
connectDB();

app.get("/", (req, res) => {
  res.send("API TaskFlow funcionando 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));