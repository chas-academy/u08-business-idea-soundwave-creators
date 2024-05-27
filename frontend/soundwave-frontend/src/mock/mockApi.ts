
// export interface SearchResult {
//     _id: string;
//     title: string;
//     artist: string;
//     album: string;
//     albumImageUrl: string;
//     releaseDate: string;
//     genre: string;
//     duration: string;
//     trackNumber: number;
//     albumId: number;
//   }
// export const fetchMockSearchResults = async (query: string): Promise<SearchResult[]> => {
//     // Simulate API call delay
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     // Mock search results
//     const mockData: SearchResult[] = [
//       {
//         _id: "1",
//         title: "Shape of You",
//         artist: "Ed Sheeran",
//         album: "÷ (Divide)",
//         albumImageUrl: "https://example.com/shape_of_you.jpg",
//         releaseDate: "2017-01-06",
//         genre: "Pop",
//         duration: "3:53",
//         trackNumber: 4,
//         albumId: 1
//       },
//       {
//         _id: "2",
//         title: "Perfect",
//         artist: "Ed Sheeran",
//         album: "÷ (Divide)",
//         albumImageUrl: "https://example.com/perfect.jpg",
//         releaseDate: "2017-03-03",
//         genre: "Pop",
//         duration: "4:23",
//         trackNumber: 5,
//         albumId: 1
//       }
//     ];
  
//     // Filter mock data based on the query
//     const filteredData = mockData.filter(song =>
//       song.title.toLowerCase().includes(query.toLowerCase()) ||
//       song.artist.toLowerCase().includes(query.toLowerCase())
//     );
  
//     return filteredData;
//   };
  