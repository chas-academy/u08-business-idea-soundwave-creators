// import React from 'react'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from "./components/Aboutus/aboutus"
import Contactus from './components/Contactus/contactus';
import HomePage from './components/HomePage/HomePage';
// import LoginPage from './components/login/login';
import AdminDashboard from './components/dashboard/admindashboard';
import UserDashboard from './components/dashboard/userdashboard';
import Subscribe from './components/subscribe/subscribe';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import SongSearchPage from './components/Navbar/search/songSearchPage';
import ArtistSearchPage from './components/Navbar/search/artistSearchPage';
import AlbumSearchPage from './components/Navbar/search/albumSearchPage';
import GenrePage from "./components/Genre/GenrePage";


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

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

      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/userdashboard" element={<UserDashboard fullName={''} emailAddress={''} createdAt={''} />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/search/:query" element={<SongSearchPage searchQuery={searchQuery} />} />
          <Route path="/artist/:artistName" element={<ArtistSearchPage searchQuery={searchQuery} />} />
          <Route path="/album/:albumTitle" element={<AlbumSearchPage searchQuery={searchQuery} />} />
        
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* <Route
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route
            path="/userdashboard"
            element={
              <UserDashboard fullName={""} emailAddress={""} createdAt={""} />
            }
          />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/genres/:genre"
            element={<GenrePage genres={genres} />}
          />
          <Route
            path="/musicplayer"
            element={
              <MusicPlayer
                song={{
                  title: "Song Title",
                  artist: "Artist Name",
                  albumArt: "path_to_album_art.jpg",
                }}
              />
            }
          /> 
      </Routes>
     <Footer/>
    </Router>
    
   </>
  )
}
export default App;