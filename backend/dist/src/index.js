"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db/db"));
const albumRoutes_1 = __importDefault(require("./routes/albumRoutes")); // Import album routes
const artistRoutes_1 = __importDefault(require("./routes/artistRoutes")); // Import artist routes
const songsRouter_1 = __importDefault(require("./routes/songsRouter"));
const searchRoutes_1 = __importDefault(require("./routes/searchRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
//import playlistRoutes from './src/routes/playlistRoutes';
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Define a simple route for testing
app.get("/", (req, res) => {
    res.send("Express + TypeScript");
});
// Routes for searching albums
app.use("/api/search", searchRoutes_1.default);
// Use album routes
app.use("/api/albums", albumRoutes_1.default);
// Use artist routes
app.use("/api/artists", artistRoutes_1.default);
app.use("/api/songs", songsRouter_1.default);
// Use auth routes
app.use("/api/auth", authRoutes_1.default);
// Use user routes
app.use("/api/users", userRoutes_1.default);
//playlist songs for user profile
//app.use('/api/playlists', playlistRoutes);
// Use error handling middleware
app.use(errorHandler_1.default);
// Use song routes
// app.use('/api/music', songRoutes);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
