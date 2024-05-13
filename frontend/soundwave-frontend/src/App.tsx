// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/navbar"
import Footer from "./Footer/footer"
import Aboutus from "./Aboutus/aboutus"


function App() {
  return (
    <>
  
    <Router>
    <Navbar/>
      <Routes>
      
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </Router>
    <Footer/>
   </>
  )
}

export default App