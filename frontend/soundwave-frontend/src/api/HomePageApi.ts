



// src/api/HomePageApi.ts
import axios from 'axios';

export interface Album {
  _id: string;
  name: string;
  artist: string;
  release_date: string;
  genre: string;
  tracklist: { title: string, duration: string }[];
  album_cover: string;
  other_details: {
    producer: string;
    label: string;
    certifications: string;
  };
  singles: { title: string, release_date: string }[];
  options: {
    play_album: string;
    save_album: string;
    explore_songs: string;
  };
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

// Function to fetch a single album by ID
export const fetchAlbumById = async (albumId: string): Promise<Album> => {
  try {
    const response = await axios.get<Album>(`http://localhost:3000/api/albums/${albumId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching album with ID ${albumId}:`, error);
    throw new Error(`Failed to fetch album with ID ${albumId}. Please try again.`);
  }

};

export interface Artist {
    _id: string;
    name: string;
    imageUrl: string;
    biography: string;
    albums: string;
  }

  interface Artistdata {
    data: Artist[];
    success: boolean;
  }
  
  // Function to fetch popular artists
  export const fetchPopularArtists = async (): Promise<Artist[]> => {
    try {
      const response = await axios.get<Artistdata>('http://localhost:3000/api/artists/getAll');
      return response.data.data;
    } catch (error) {
      console.error("Error fetching popular artists:", error);
      throw new Error("Failed to fetch popular artists. Please try again.");
    }
  };

  // src/api/HomePageApi.ts

  // src/api/HomePageApi.ts


  
  
