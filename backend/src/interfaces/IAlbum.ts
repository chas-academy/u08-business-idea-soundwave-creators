// export interface IAlbum {
//     title: string;
//     author: string;
//     publisher?: string;
//     read: boolean;
//   }


export interface IAlbum {
  id: number;
  title: string;
  artist: string;
  releaseYear: number;
  genre: string;
  tracks: ITrack[];
}

export interface ITrack {
  id: number;
  title: string;
  duration: string; // e.g., "3:45"
}

const album: IAlbum = {
  id: 1,
  title: "Abbey Road",
  artist: "The Beatles",
  releaseYear: 1969,
  genre: "Rock",
  tracks: [
      { id: 1, title: "Come Together", duration: "4:19" },
      { id: 2, title: "Something", duration: "3:03" },
      { id: 3, title: "Maxwell's Silver Hammer", duration: "3:27" },
      // Add more tracks as needed
  ],
};
