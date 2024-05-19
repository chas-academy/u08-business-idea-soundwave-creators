// import React from "react";


import Heroes from "../Heroes/Heroes";
import PopularAlbum from "../PopularAlbum/PopularAlbum";
import PopularArtist from "../PopularArtist/PopularArtist";

function Home() {
  return (
    <section id="HomePage" className="text-secondary body-font relative bg-primary shadow-secondary">
      <PopularArtist />
      <PopularAlbum/>
      <Heroes />
      </section>
  );
}

export default Home;
