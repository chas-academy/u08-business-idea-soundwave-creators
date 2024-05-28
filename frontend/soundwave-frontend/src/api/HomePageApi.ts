// services/api.ts
import axios from 'axios';

export interface Album {
  _id: string;
  name: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
}

// Function to fetch popular albums
export const fetchPopularAlbums = async (): Promise<Album[]> => {
  try {
    const response = await axios.get<Album[]>('http://localhost:3000/api/albums');
    return response.data;
  } catch (error) {
    console.error("Error fetching popular albums:", error);
    throw new Error("Failed to fetch popular albums. Please try again.");
  }
};

export interface Artist {
    _id: string;
    name: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  }
  
  // Function to fetch popular artists
  export const fetchPopularArtists = async (): Promise<Artist[]> => {
    try {
      const response = await axios.get<Artist[]>('http://localhost:3000/api/artists/getAll');
      return response.data;
    } catch (error) {
      console.error("Error fetching popular artists:", error);
      throw new Error("Failed to fetch popular artists. Please try again.");
    }
  };

  // src/api/HomePageApi.ts

  // src/api/HomePageApi.ts
