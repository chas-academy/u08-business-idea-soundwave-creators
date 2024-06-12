import axios from 'axios';

const API = axios.create({
  baseURL: 'https://u08-business-idea-soundwave-creators.onrender.com/api', // Adjust this based on your backend URL and port
});


// Add a request interceptor to include the token in the headers if it exists
/*API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});  */

export default API;

/*const getAllSongs = () => {
   API.get("/songs/songs").then((data)=>{
    return data 
   }
  )};*/
