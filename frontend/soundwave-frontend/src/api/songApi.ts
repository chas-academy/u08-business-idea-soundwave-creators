import axios from "axios"

export interface likedSong {
  songid: string;
  userid: string;
}

export const addLikedSong = async (songid:string, userid:string) => {
  console.log(songid, userid)
  // try {
  //   const response = await axios.post(`http://localhost:3000/api/songs/search`, {
  //     params: { query, type: 'title' }
  //   });
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching search results by title:", error);
  //   throw new Error("Failed to fetch search results by title. Please try again.");
  // }
};