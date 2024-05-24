import React from 'react';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './index.css';
import Navbar from './components/Navbar/navbar';

const App: React.FC = () => {
  // Your App component logic here
  return (
    <div className="App">
      <Navbar/>
      <MusicPlayer
        song={{
          title: 'Song Title',
          artist: 'Artist Name',
          albumArt: 'path_to_album_art.jpg'
        }}
      />
    </div>
  );
};

export default App;
