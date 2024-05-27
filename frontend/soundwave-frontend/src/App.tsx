// import React ,{ useState ,  useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Aboutus from "./components/Aboutus/aboutus"
// import Contactus from './components/Contactus/contactus';
// import HomePage from './components/HomePage/HomePage';
// import LoginPage from './components/login/login';
// import AdminDashboard from './components/dashboard/admindashboard';
// import UserDashboard from './components/dashboard/userdashboard';
// import Subscribe from './components/subscribe/subscribe';
// import Navbar from './components/Navbar/navbar';
// import Footer from './components/Footer/footer';
// import SongSearchPage from './components/Navbar/search/songSearchPage';




// interface SearchResult {
//   id: string;
//   title: string;
//   artist: string;
//   // Add other properties as needed
// }


// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

//   useEffect(() => {
//     console.log("Search query:", searchQuery);
//     console.log("Search results:", searchResults);
//   }, [searchQuery, searchResults]);

//   const handleSearchQueryChange = (query: string) => {
//     setSearchQuery(query);
//     performSearch(query);
//   };


//  const performSearch = async (query: string) => {
//   try {
//     const response = await fetch(`/api/search?query=${query}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch search results");
//     }
//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.indexOf("application/json") !== -1) {
//       const data = await response.json();
//       setSearchResults(data);
//     } else {
//       throw new Error("Invalid response format: not JSON");
//     }
//   } catch (error) {
//     console.error("Error searching:", error);
//     // Handle the error gracefully, e.g., display an error message to the user
//   }
// };


//    // Wrapper component to pass props to HomePage
//   //  const HomeWrapper: React.FC = () => {
//   //   return <HomePage searchQuery={searchQuery} searchResults={searchResults}  onSearchQueryChange={handleSearchQueryChange}/>;
//   // };
//   return (
//     <>
  
//     <Router>
//     <Navbar onSearchQueryChange={handleSearchQueryChange} />
//       <Routes>
//         <Route path="/" element={<HomePage/>} />
     
//       <Route path="/admindashboard" element={<AdminDashboard />} />
//       <Route path="/userdashboard" element={<UserDashboard fullName={''} emailAddress={''} createdAt={''} />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/subscribe" element={<Subscribe />} />
//       <Route path="/search/:query" element={<SongSearchPage />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/contactus" element={<Contactus />} />
      
//       </Routes>
//      <Footer/>
//     </Router>
    
//    </>
//   )
// }

// export default App

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Aboutus from "./components/Aboutus/aboutus";
// import Contactus from './components/Contactus/contactus';
// import HomePage from './components/HomePage/HomePage';
// import LoginPage from './components/login/login';
// import AdminDashboard from './components/dashboard/admindashboard';
// import UserDashboard from './components/dashboard/userdashboard';
// import Subscribe from './components/subscribe/subscribe';
// import Navbar from './components/Navbar/navbar';
// import Footer from './components/Footer/footer';
// import SongSearchPage from './components/Navbar/search/songSearchPage';

// // Define SearchResult interface
// interface SearchResult {
//   id: string;
//   title: string;
//   artist: string;
//   // Add other properties as needed
// }

// // Mock function to simulate fetching data from an API
// const fetchSearchResults = async (query: string): Promise<SearchResult[]> => {
//   // Simulate API call delay
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   // Mock search results
//   const mockData: SearchResult[] = [
//     { id: '1', title: 'Song 1', artist: 'Artist 1' },
//     { id: '2', title: 'Song 2', artist: 'Artist 2' },
//     { id: '3', title: 'Song 3', artist: 'Artist 3' },
//   ];
//   return mockData;
// };

// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     console.log("Search query:", searchQuery);
//     console.log("Search results:", searchResults);
//   }, [searchQuery, searchResults]);

//   const handleSearchQueryChange = (query: string) => {
//     setSearchQuery(query);
//     performSearch(query);
//   };

//   const performSearch = async (query: string) => {
//     setLoading(true);
//     try {
//       const data = await fetchSearchResults(query);
//       setSearchResults(data);
//     } catch (error) {
//       console.error("Error searching:", error);
//       // Handle the error gracefully, e.g., display an error message to the user
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Router>
//         <Navbar onSearchQueryChange={handleSearchQueryChange} />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/admindashboard" element={<AdminDashboard />} />
//           <Route path="/userdashboard" element={<UserDashboard fullName={''} emailAddress={''} createdAt={''} />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/subscribe" element={<Subscribe />} />
//           <Route path="/search/:query" element={<SongSearchPage />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/contactus" element={<Contactus />} />
//         </Routes>
//         <Footer />
//       </Router>
//       {loading && <div>Loading...</div>}
//     </>
//   );
// };

// export default App;
// src/App.tsx
// src/App.
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from "./components/Aboutus/aboutus";
import Contactus from './components/Contactus/contactus';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/login/login';
import AdminDashboard from './components/dashboard/admindashboard';
import UserDashboard from './components/dashboard/userdashboard';
import Subscribe from './components/subscribe/subscribe';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import SongSearchPage from './components/Navbar/search/songSearchPage';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/search/:query" element={<SongSearchPage searchQuery={searchQuery} />} />
         <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
