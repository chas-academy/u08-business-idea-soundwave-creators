<<<<<<< HEAD
import React from 'react';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import './index.css';

const App: React.FC = () => {
  // Your App component logic here
  return (
    <div className="App">
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
=======
// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"
import Aboutus from "./components/Aboutus/aboutus"
import Contactus from './components/Contactus/contactus';


function App() {
  return (
    <>
  
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </Router>
    
   </>
  )
}

export default App
>>>>>>> test
