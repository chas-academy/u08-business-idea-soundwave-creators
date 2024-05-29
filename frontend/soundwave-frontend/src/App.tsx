

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Aboutus from "./components/Aboutus/aboutus";
// import Contactus from "./components/Contactus/contactus";

// import HomePage from "./components/HomePage/HomePage";

// // import LoginPage from './components/login/login';
// import AdminDashboard from "./components/dashboard/admindashboard";
// import UserDashboard from "./components/dashboard/userdashboard";
// import Subscribe from "./components/subscribe/subscribe";
// import Navbar from "./components/Navbar/navbar";
// import Footer from "./components/Footer/footer";
// import GenrePage from "components/Genre/GenrePage";

// function App() {
//   const App: React.FC = () => {
//     const genres = [
//       "pop",
//       "rock",
//       "hip-hop",
//       "jazz",
//       "electronic",
//       "folk",
//       "classical",
//       "country",
//     ];

//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />

//           <Route path="/admindashboard" element={<AdminDashboard />} />
//           <Route
//             path="/userdashboard"
//             element={
//               <UserDashboard fullName={""} emailAddress={""} createdAt={""} />
//             }
//           />
//           {/* <Route path="/login" element={<LoginPage />} /> */}
//           <Route path="/subscribe" element={<Subscribe />} />

//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/contactus" element={<Contactus />} />
//           <Route path="/genres/:genre" element={<GenrePage />} />
//           genres={genres}

//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;

import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Aboutus from "./components/Aboutus/aboutus";
import Contactus from "./components/Contactus/contactus";
import HomePage from "./components/HomePage/HomePage";
// import LoginPage from './components/login/login';
import AdminDashboard from "./components/dashboard/admindashboard";
import UserDashboard from "./components/dashboard/userdashboard";
import Subscribe from "./components/subscribe/subscribe";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import GenrePage from "./components/Genre/GenrePage";
// import Albums from './components/Albums/Albums';
import SongsByAlbum from "./components/Albums/SongsByAlbum";

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
           <Route path="/" element={<HomePage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/userdashboard" element={<UserDashboard fullName="" emailAddress="" createdAt="" />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
         
          <Route
            path="/genres/:genre"
            element={<GenrePage genres={genres} />}
          />
          <Route path="/albums/:albumId/songs" element={<SongsByAlbum />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
