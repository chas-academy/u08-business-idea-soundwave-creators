// services/api.ts
import axios from 'axios';


interface SearchResult {
      _id: string;
      title: string;
      artist: string;
      album: string;
      albumImageUrl: string;
      releaseDate: string;
      genre: string;
      duration: string;
      trackNumber: number;
      albumId: number;
    }

export const fetchSearchResults = async (query: string, type: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/songs/search`, {
      params: { query, type }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw new Error("Failed to fetch search results. Please try again.");
  }
};
