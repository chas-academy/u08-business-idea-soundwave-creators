// import React from 'react'
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Footer/aboutus";
import Contactus from "./components/Footer/contactus";
import HomePage from "./components/HomePage/HomePage";
// import LoginPage from './components/login/login';
import AdminDashboard from "./components/dashboard/admindashboard";
import UserDashboard from "./components/dashboard/userdashboard";
import Subscribe from "./components/subscribe/subscribe";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import GenrePage from "./components/Genre/GenrePage";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
// import Albums from "./components/Albums/Albums";
// import SongsByAlbum from "./components/Albums/SongsByAlbum";
import SongSearchPage from "./components/Navbar/search/songSearchPage";
import ArtistSearchPage from "./components/Navbar/search/artistSearchPage";
import AlbumSearchPage from "./components/Navbar/search/albumSearchPage";
import Termsofservice from "./components/Footer/termsofservice";
import PrivacyPolicy from "./components/Footer/privacypolicy";
import HelpAndSupport from "./components/Footer/helpandsupport";
import FAQ from "./components/Footer/faq";
import Feedback from "./components/Footer/Feedback";

import OAuthCallback from "./components/callBacks/OAuthCallback";
import Login from "./components/login/login";
import ResetPassword from "./components/login/ResetPassword";
//import AllSongs from './components/Playlists/allSongs';
import PopularAlbum from "./components/PopularAlbum/PopularAlbum";
import PopularArtist from "./components/PopularArtist/PopularArtist";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const genres = [
    "pop",
    "rock",
    "hip-hop",
    "jazz",
    "electronic",
    "folk",
    "classical",
    "country",
  ];

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Router>
        <Navbar onSearchQueryChange={handleSearchQueryChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/callback" element={<OAuthCallback />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route
            path="/search/:query"
            element={<SongSearchPage searchQuery={searchQuery} />}
          />
          <Route
            path="/artist/:artistName"
            element={<ArtistSearchPage searchQuery={searchQuery} />}
          />
          <Route
            path="/album/:albumTitle"
            element={<AlbumSearchPage searchQuery={searchQuery} />}
          />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/helpandsupport" element={<HelpAndSupport />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/termsofservice" element={<Termsofservice />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          {/* <Route path="/albums/:albumId/songs" element={<SongsByAlbum />} />
          <Route path="/albums" element={<Albums />} /> */}
          <Route path="/popular-albums" element={<PopularAlbum />} />
          <Route path="/popular-artists" element={<PopularArtist />} />
          <Route
            path="/genres/:genre"
            element={<GenrePage genres={genres} />}
          />
          <Route path="/musicplayer" element={<MusicPlayer />} />
          <Route
            path="/genres/:genre"
            element={<GenrePage genres={genres} />}
          />
          <Route path="/musicplayer" element={<MusicPlayer />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
