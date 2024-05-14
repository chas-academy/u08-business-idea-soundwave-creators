import React from "react";


import Playlists from "../components/Playlists/Playlists";
import PopularAlbum from "../components/PopularAlbum/PopularAlbum";
import PopularArtist from "../components/PopularArtist/PopularArtist";

function Home() {
  return (
    <>
      <PopularArtist />
      <PopularAlbum/>
      <Playlists />
    </>
  );
}

export default Home;
