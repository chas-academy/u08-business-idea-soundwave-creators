// services/api.ts
import axios from 'axios';


export interface SearchResult {
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

  export   interface ArtistResult {
      _id: string;
      name: string;
      biography: string;
      albums:AlbumResult [];
      popularSongs: SearchResult[];
      imageUrl: string;
    }

    export interface AlbumResult {
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
    
    
    export const fetchSearchResultsByAlbum = async (query: string): Promise<AlbumResult[]> => {
      try {
        const response = await axios.get(`http://localhost:3000/api/albums/search`, {
          params: { query, type: 'album' }
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching search results by album:", error);
        throw new Error("Failed to fetch search results by album. Please try again.");
      }
    };

// Function to fetch search results by title
export const fetchSearchResultsByTitle = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/songs/search`, {
      params: { query, type: 'title' }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results by title:", error);
    throw new Error("Failed to fetch search results by title. Please try again.");
  }
};

export const fetchSearchResultsByArtist = async (query: string): Promise<ArtistResult[]> => {
  try {
    const response = await axios.get(`http://localhost:3000/api/artists/search`, {
      params: { query, type: 'artist' }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results by artist:", error);
    throw new Error("Failed to fetch search results by artist. Please try again.");
  }
};