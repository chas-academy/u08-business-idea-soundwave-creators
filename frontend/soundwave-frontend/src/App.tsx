// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"
import Aboutus from "./components/Aboutus/aboutus"
import Contactus from './components/Contactus/contactus';
import HomePage from './components/HomePage/HomePage';



function App() {
  return (
    <>
  
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/HomePage" element={<HomePage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </Router>
    
   </>
  )
}

export default App