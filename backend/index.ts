import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/db";
import albumRoutes from "./src/routes/albumRoutes"; // Import album routes
import artistRoutes from "./src/routes/artistRoutes"; // Import artist routes
// import { getAllAlbums } from './src/controllers/albumcontroller';
// import { getAllArtists } from './src/controllers/artistscontroller';
import songRoutes from "./src/routes/songsRouter";
import searchRoutes from "./src/routes/searchRoutes";
import authRoutes from "./src/routes/authRoutes";
import userRoutes from "./src/routes/userRoutes";
import errorHandler from "./src/middleware/errorHandler";
//import playlistRoutes from './src/routes/playlistRoutes';
import genreRoutes from "./src/routes/genreRoutes"

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

//playlist songs for user profile
//app.use('/api/playlists', playlistRoutes);

// Use error handling middleware
app.use(errorHandler);

app.use("/api", genreRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
