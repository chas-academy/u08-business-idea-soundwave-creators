// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/navbar"
import Footer from "./Footer/footer"
import Aboutus from "./Aboutus/aboutus"
import Contactus from './Contactus/contactus';


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