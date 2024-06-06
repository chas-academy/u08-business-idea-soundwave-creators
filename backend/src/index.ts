import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db";
import albumRoutes from "./routes/albumRoutes"; // Import album routes
import artistRoutes from "./routes/artistRoutes"; // Import artist routes
// import songs from './models/songs';
import songRoutes from "./routes/songsRouter";
import searchRoutes from "./routes/searchRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middleware/errorHandler";
import genreRoutes from "./routes/genreRoutes";
//import playlistRoutes from './src/routes/playlistRoutes';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define a simple route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

// Routes for searching albums
app.use("/api/search", searchRoutes);
// Use album routes
app.use("/api/albums", albumRoutes);
// Use artist routes
app.use("/api/artists", artistRoutes);

app.use("/api/songs", songRoutes);

// Use auth routes
app.use("/api/auth", authRoutes);

// Use user routes
app.use("/api/users", userRoutes);

app.use("/api", genreRoutes);

//playlist songs for user profile
//app.use('/api/playlists', playlistRoutes);

// Use error handling middleware
app.use(errorHandler);

// Use song routes
// app.use('/api/music', songRoutes);

// Genre Routes
app.use("/api", genreRoutes);




app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
