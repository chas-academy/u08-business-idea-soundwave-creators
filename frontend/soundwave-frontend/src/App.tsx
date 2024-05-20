// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"
import Aboutus from "./components/Aboutus/aboutus"
import Contactus from './components/Contactus/contactus';
// import AdminDashboard from './components/dashboard/admindashboard';
// import UserDashboard from './components/dashboard/userdashboard';

function App() {
  return (
    <>
  
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        {/* <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} /> */}
      </Routes>
      <Footer/>
    </Router>
    
   </>
  )
}

export default App