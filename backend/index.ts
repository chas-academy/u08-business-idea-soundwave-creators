import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/db";
import genreRoutes from "./src/routes/genreRoutes";
// import albumRoutes from './src/routes/albumRoutes'; // Import album routes
import artistRoutes from './src/routes/artistRoutes'; // Import artist routes
import titleSearchRoutes from './src/routes/search/titleSearchRoutes';
import artistSearchRoutes from './src/routes/search/artistsSearchRoutes';
import albumsSearchRoutes from './src/routes/search/albumsSearchRoutes';
// import { getAllAlbums } from './src/controllers/albumcontroller'; 



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

// app.get("/test", getAllAlbums);

// Use artist routes
app.use("/api/artists", artistRoutes);

// Use song routes
app.use("/api", genreRoutes);
app.use('/api/artists', artistRoutes);

// Use title search routes
app.use('/api/songs', titleSearchRoutes);

// Use artist search routes
app.use('/api/artists', artistSearchRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
