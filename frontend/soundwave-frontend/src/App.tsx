// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Aboutus from "./components/Aboutus/aboutus"
import Contactus from './components/Contactus/contactus';
import LoginPage from './components/login/login';
import AdminDashboard from './components/dashboard/admindashboard';
import UserDashboard from './components/dashboard/userdashboard';
import Subscribe from './components/subscribe/subscribe';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
// import Home from './components/home/home';

function App() {
  return (
    <>
  
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/userdashboard" element={<UserDashboard fullName={''} emailAddress={''} createdAt={''} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/subscribe" element={<Subscribe />} />
      {/* <Route path="/" element={<Home />} /> */}
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      
      </Routes>
     <Footer/>
    </Router>
    
   </>
  )
}

export default App