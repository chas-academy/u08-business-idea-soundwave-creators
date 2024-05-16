import axios from "axios";

const spotifyApiBaseUrl = "https://api.spotify.com/v1";

interface TrackWithTracks {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
}

const MusicService = {
  getToken: async () => {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID || "",
      client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || "",
    });

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  },

  searchTracksByGenre: async (genre: string) => {
    const token = await MusicService.getToken();
    const response = await axios.get(`${spotifyApiBaseUrl}/search`, {
      params: {
        q: `genre:${genre}`,
        type: "track",
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const tracks: TrackWithTracks[] = response.data.tracks.items.map(
      (item: any) => ({
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist: any) => ({ name: artist.name })),
        album: item.album,
      })
    );

    return tracks;
  },
};

export default MusicService;
