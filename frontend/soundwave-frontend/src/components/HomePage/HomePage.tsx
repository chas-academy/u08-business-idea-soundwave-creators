// import React from "react";


import Playlists from "../Playlists/Playlists";
import PopularAlbum from "../PopularAlbum/PopularAlbum";
import PopularArtist from "../PopularArtist/PopularArtist";

function Home() {
  return (
    <section id="HomePage" className="text-secondary body-font relative bg-primary shadow-secondary">
      <PopularArtist />
      <PopularAlbum/>
      <Playlists />
      </section>
  );
}

export default Home;
