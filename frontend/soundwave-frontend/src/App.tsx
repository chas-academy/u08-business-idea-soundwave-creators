// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Aboutus from "./components/Aboutus/aboutus";
import Contactus from "./components/Contactus/contactus";
import GenrePage from "./components/Genre/GenrePage";

// function App() {
const App: React.FC = () => {
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

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/genres/:genre" element={<GenrePage />} />
          genres={genres}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
