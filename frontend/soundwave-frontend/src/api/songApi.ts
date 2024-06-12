import axios from "axios"

export interface likedSong {
  songid: string;
  userid: string;
}

export const addLikedSong = async (songid:string, userid:string) => {
  try {
    const response = await axios.post(`https://u08-business-idea-soundwave-creators.onrender.com/api/song/addLikedSong`, {songid, userid});
    return response.data;
  } catch (error) {
    console.error("Error fetching search results by title:", error);
    throw new Error("Failed to fetch search results by title. Please try again.");
  }
};