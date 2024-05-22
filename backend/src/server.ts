/*import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';
import { getAllAlbums } from './controllers/albumcontroller';

connectDB();

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript ");
}); 

app.get("/test", (req: Request, res: Response) => {
    console.log("hello");
    res.send("hello");
});
    

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});*/

/*import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db';
import Album from './models/album';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());  // Enable CORS

// Connect to MongoDB
connectDB();

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.get('/api/albums', async (req: Request, res: Response) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred while fetching albums');
    }
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});*/
/*import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db';
import albumRoutes from './routes/albumRoutes'; // Import album routes
import artistRoutes from './routes/artistRoutes'; // Import artist routes

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

app.get("/test", (req: Request, res: Response) => {
    console.log("hello");
    res.send("hello");
});

// Use album routes
app.use('/api/albums', albumRoutes);

// Use artist routes
app.use('/api/artists', artistRoutes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});*/
