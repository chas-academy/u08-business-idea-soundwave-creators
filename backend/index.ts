import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/db";
// import albumRoutes from "./src/routes/albumRoutes"; // Import album routes
import artistRoutes from "./src/routes/artistRoutes"; // Import artist routes
// import { getAllAlbums } from "./src/controllers/albumcontroller";
import genreRoutes from "./src/routes/genreRoutes";

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

// Use album routes
// app.use("/api/albums", albumRoutes);

// Use artist routes
app.use("/api/artists", artistRoutes);

// Use song routes
app.use("/api", genreRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});