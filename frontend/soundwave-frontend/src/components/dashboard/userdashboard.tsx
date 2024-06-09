
import React, { useEffect, useState } from 'react';
import API from '../../api/api';


// interface Song {
//   _id: string;
//   title: string;
// }
const UserDashboard: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ fullName: '', emailAddress: '', createdAt: '' });
  // const [playlist, setPlaylist] = useState<Song[]>([]);
  
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await API.get('/users/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const { name, email, created_at } = response.data;
        setUserInfo({
          fullName: name,
          emailAddress: email,
          createdAt: new Date(created_at).toLocaleDateString(),
        });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    /*const fetchPlaylist = async () => {
      try {
        const response = await API.get('/userPlaylist', { // Change the endpoint to '/userPlaylist'
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPlaylist(response.data);
      } catch (error) {
        console.error('Failed to fetch playlist:', error);
      }
    };

    fetchPlaylist();*/
    fetchUserInfo();
  }, []);

  /*const handleRemoveSong = async (songId: string) => {
    try {
      await API.delete(`/userPlaylist/${songId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPlaylist(playlist.filter(song => song._id !== songId));
    } catch (error) {
      console.error('Failed to remove song from playlist:', error);
    }
  };*/

  /*const savedSongs: string[] = ["Song 1", "Song 2", "Song 3"];

  //const handleRemoveSong = (songIndex: number) => {
    savedSongs.splice(songIndex, 1);
    forceUpdate();
  };*/

  return (
    <div className="shadow-secondary justify-center items-center bg-primary px-8 py-12">
      <section className="shadow-secondary mt-7  rounded-xl   dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
        <div className="px-4 py-5 sm:px-8">
          <p className="block text-m font-bold px-4 pb-auto mt-8 max-w-2xl text-2xl text-gray-300">
            User's Details and information
          </p>
        </div>
        <div className="px-9 py-1 pt-auto border-gray-200 rounded-xl">
          <dl className=" border-2 border-secondary shadow-secondary bg-trasnparentext-sm font-medium text-gray-500  w-full mt-3 mb-4 px-3 py-2 rounded-2xl  focus:outline-none">
            <div className=" ">
              <dt className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none">
                Full name:
              </dt>
              <dd className="bg-trasnparen mt-1 text-m text-gray-300 sm:mt-0 sm:col-span-2">
                {userInfo.fullName}
              </dd>
            </div>
            <div className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none">
              <dt className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none focus:border-secondary">
                Email address:
              </dt>
              <dd className="bg-trasnparen  text-m text-gray-300 sm:mt-0 sm:col-span-2">
                {userInfo.emailAddress}
              </dd>
            </div>
            <div className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none">
              <dt className="bg-trasnparentext-sm font-medium text-gray-500  w-full py-2 focus:outline-none focus:border-secondary">
                Created at:
              </dt>
              <dd className="bg-trasnparen mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                {userInfo.createdAt}
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="shadow-secondary mt-9  rounded-xl   dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
        <div className="p-2 sm:p-2 rounded-2xl mt-2">
          <div className="text-center">
            <h1 className="block text-m font-bold  mt-8 max-w-2xl text-2xl text-gray-300">Saved Songs</h1>
          </div>
          {/* <ul className="mt-5 text-center text-text2 pb-8">
            {playlist.map((song, index) => (
              <li key={index} className="mb-2">
                {song.title}
                <button onClick={() => (song._id)} className="ml-2 text-red-500">Remove</button>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
       </div>
    
  );
};

export default UserDashboard;


/*import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

interface UserInfo {
  fullName: string;
  emailAddress: string;
  createdAt: string;
}

interface Song {
  _id: string;
  title: string;
}

const UserDashboard: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ fullName: '', emailAddress: '', createdAt: '' });
  const [playlist, setPlaylist] = useState<Song[]>([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`${axios.defaults.baseURL}/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const { name, email, created_at } = response.data;
        setUserInfo({
          fullName: name,
          emailAddress: email,
          createdAt: new Date(created_at).toLocaleDateString(),
        });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`${axios.defaults.baseURL}/userPlaylist`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPlaylist(response.data);
      } catch (error) {
        console.error('Failed to fetch playlist:', error);
      }
    };

    fetchUserInfo();
    fetchPlaylist();
  }, []);

  const handleRemoveSong = async (songId: string) => {
    try {
      await axios.delete(`${axios.defaults.baseURL}/userPlaylist/${songId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPlaylist(playlist.filter(song => song._id !== songId));
    } catch (error) {
      console.error('Failed to remove song from playlist:', error);
    }
  };

  return (
    <div className="shadow-secondary justify-center items-center bg-primary px-8 py-12">
      <section className="shadow-secondary mt-7 rounded-xl dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
        <div className="px-4 py-5 sm:px-8">
          <p className="block text-m font-bold px-4 pb-auto mt-8 max-w-2xl text-2xl text-gray-300">
            User's Details and information
          </p>
        </div>
        <div className="px-9 py-1 pt-auto border-gray-200 rounded-xl">
          <dl className="border-2 border-secondary shadow-secondary bg-trasnparentext-sm font-medium text-gray-500 w-full mt-3 mb-4 px-3 py-2 rounded-2xl focus:outline-none">
            <div className="">
              <dt className="bg-trasnparentext-sm font-medium text-gray-500 w-full py-2 focus:outline-none">
                Full name:
              </dt>
              <dd className="bg-trasnparen mt-1 text-m text-gray-300 sm:mt-0 sm:col-span-2">
                {userInfo.fullName}
              </dd>
            </div>
            <div className="bg-trasnparentext-sm font-medium text-gray-500 w-full py-2 focus:outline-none">
              <dt className="bg-trasnparentext-sm font-medium text-gray-500 w-full py-2 focus:outline-none focus:border-secondary">
                Email address:
              </dt>
              <dd className="bg-trasnparen text-m text-gray-300 sm:mt-0 sm:col-span-2">
                {userInfo.emailAddress}
              </dd>
            </div>
            <div className="bg-trasnparentext-sm font-medium text-gray-500 w-full py-2 focus:outline-none">
              <dt className="bg-trasnparentext-sm font-medium text-gray-500 w-full py-2 focus:outline-none focus:border-secondary">
                Created at:
              </dt>
              <dd className="bg-trasnparen mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                {userInfo.createdAt}
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="shadow-secondary mt-9 rounded-xl dark:border-gray-500 border-2 border-secondary max-w-md mx-auto">
        <div className="p-2 sm:p-2 rounded-2xl mt-2">
          <div className="text-center">
            <h1 className="block text-m font-bold mt-8 max-w-2xl text-2xl text-gray-300">Saved Songs</h1>
          </div>
          <ul className="mt-5 text-center text-text2 pb-8">
            {playlist.map((song, index) => (
              <li key={index} className="mb-2">
                {song.title}
                <button onClick={() => handleRemoveSong(song._id)} className="ml-2 text-red-500">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;*/
