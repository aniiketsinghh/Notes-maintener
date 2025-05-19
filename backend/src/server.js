import express from 'express';
import dotenv from "dotenv";
import routesFile from './routes/Notes.route.js';
import connectDB from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes",routesFile);


connectDB().then(() => { 
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    }
)
});