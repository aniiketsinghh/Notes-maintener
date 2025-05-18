import express from 'express';
import dotenv from "dotenv";
import routesFile from './routes/Notes.route.js';
import connectDB from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use("/api/nots",routesFile);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
    }
)