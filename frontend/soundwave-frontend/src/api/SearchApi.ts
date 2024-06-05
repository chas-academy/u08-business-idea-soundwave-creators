import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:3000/api'; // Adjust the base URL as needed

const api: AxiosInstance = axios.create({
  baseURL,
});

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
    
    export const searchAlbums = async (query: string): Promise<AlbumResult[]> => {
      try {
        const response = await api.get('/search/albums', {
          params: { query, type: 'album' }
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching search results by album:", error);
        throw new Error("Failed to fetch search results by album. Please try again.");
      }
    };
   
    export const searchTitles = async (query: string): Promise<SearchResult[]> => {
      try {
        const response = await api.get(`/search/titles`, {
          params: { query, type: 'title' } // Adjusted the endpoint
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching search results by title:", error);
        throw new Error("Failed to fetch search results by title. Please try again.");
      }
    };

export const searchArtists = async (query: string): Promise<ArtistResult[]> => {
  try {
    const response = await api.get(`/search/artists`, {
      params: { query, type: 'artist' }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error searching artists');
  }
};

