// import React, { useEffect, useState } from "react";
// import API from "../../api/api";

// interface Song {
//   _id: string;
//   title: string;
// }

// const UserDashboard: React.FC = () => {
//   const [userInfo, setUserInfo] = useState({
//     fullName: "",
//     emailAddress: "",
//     createdAt: "",
//   });

//   // Hard-coded playlist
//   const [playlist, setPlaylist] = useState<Song[]>([
//     { _id: "1", title: "Shape of You - Ed Sheeran"},
//     { _id: "2", title: "Sunflower - Post Malone & Swae Lee" },
//     { _id: "3", title: "Blinding Lights - The Weeknd" }
//   ]);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await API.get("/users/me", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const { name, email, created_at } = response.data;
//         setUserInfo({
//           fullName: name,
//           emailAddress: email,
//           createdAt: new Date(created_at).toLocaleDateString(),
//         });
//       } catch (error) {
//         console.error("Failed to fetch user info:", error);
//       }
//     };

//     fetchUserInfo();
//   }, []);

//   const handleRemoveSong = (songId: string) => {
//     setPlaylist(playlist.filter(song => song._id !== songId));
//   };

//   return (
//     <div className="shadow-secondary justify-center items-center bg-primary px-8 py-12">
//       <section className="shadow-secondary mt-7 rounded-xl dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
//         <div className="px-4 py-5 sm:px-8">
//           <p className="block text-m font-bold px-4 pb-auto mt-8 max-w-2xl text-2xl text-gray-300">
//             User's Details and information
//           </p>
//         </div>
//         <div className="px-9 py-1 pt-auto border-gray-200 rounded-xl">
//           <dl className="border-2 border-secondary shadow-secondary bg-transparent text-sm font-medium text-gray-500 w-full mt-3 mb-4 px-3 py-2 rounded-2xl focus:outline-none">
//             <div>
//               <dt className="text-sm font-medium text-gray-500 w-full py-2 focus:outline-none">
//                 Full name:
//               </dt>
//               <dd className="mt-1 text-m text-gray-300 sm:mt-0 sm:col-span-2">
//                 {userInfo.fullName}
//               </dd>
//             </div>
//             <div className="text-sm font-medium text-gray-500 w-full py-2 focus:outline-none">
//               <dt className="text-sm font-medium text-gray-500 w-full py-2 focus:outline-none focus:border-secondary">
//                 Email address:
//               </dt>
//               <dd className="text-m text-gray-300 sm:mt-0 sm:col-span-2">
//                 {userInfo.emailAddress}
//               </dd>
//             </div>
//             <div className="text-sm font-medium text-gray-500 w-full py-2 focus:outline-none">
//               <dt className="text-sm font-medium text-gray-500 w-full py-2 focus:outline-none focus:border-secondary">
//                 Created at:
//               </dt>
//               <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
//                 {userInfo.createdAt}
//               </dd>
//             </div>
//           </dl>
//         </div>
//       </section>
//       <div className="shadow-secondary mt-9 rounded-xl dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
//         <div className="p-2 sm:p-2 rounded-2xl mt-2">
//           <div className="text-center">
//             <h1 className="block text-m font-bold mt-8 max-w-2xl text-2xl text-gray-300">
//               Saved Songs
//             </h1>
//           </div>
//           <ul className="mt-5 text-center text-text2 pb-8">
//             {playlist.map((song) => (
//               <li key={song._id} className="mb-2">
//                 {song.title}
//                 <button
//                   onClick={() => handleRemoveSong(song._id)}
//                   className="ml-2 text-red-500"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;