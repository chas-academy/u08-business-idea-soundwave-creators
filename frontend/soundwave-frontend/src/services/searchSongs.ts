// const searchSongs = async (query: string, type: string) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/songs/search?query=${query}&type=${type}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('There was a problem with the search request:', error);
//       return []; // Return an empty array in case of error
//     }
//   };
  
//   export default searchSongs;
  