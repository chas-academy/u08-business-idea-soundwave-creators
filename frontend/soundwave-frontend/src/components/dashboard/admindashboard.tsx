import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faToggleOn,
  faToggleOff,
  faUsers,
  faThumbsUp,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import API from "../../api/api"; // Import the axios instance
import axios from "axios";

interface User {
  _id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface Song {
  _id: string;
  title: string;
  artist: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [users, setUsers] = useState<User[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  const [deleteMessage, setDeleteMessage] = useState<string>("");

  useEffect(() => {
    // Fetch users and songs when component mounts
    fetchUsers();
    fetchSongs();
  }, []);
  ////updated with api
  const fetchUsers = () => {
    axios
      .get(`${API.defaults.baseURL}/users/users`)
      .then((response) => {
        if (!response.data) {
          throw new Error("No data received");
        }
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        // Handle the error, e.g., display an error message to the user
      });
  };

  const fetchSongs = () => {
    axios
      .get(`${API.defaults.baseURL}/songs/songs`)
      .then((response) => {
        if (!response.data) {
          throw new Error("No data received");
        }
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
        // Handle the error, e.g., display an error message to the user
      });
  };

  //delete songs
  const handleDeleteSong = (id: string) => {
    axios
      .delete(`${API.defaults.baseURL}/songs/${id}`)
      .then(() => {
        fetchSongs();
      })
      .catch((error) => console.error("Error deleting song:", error));
  };

  const handleDeleteUser = (id: number) => {
    axios
      .delete(`${API.defaults.baseURL}/users/${id}`)
      .then(() => {
        fetchUsers();
        setDeleteMessage("User has been deleted.");
        setTimeout(() => {
          setDeleteMessage("");
        }, 9000); // Clear the message after 5 seconds
      })
      .catch((error) => console.error("Error deleting user:", error));
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div>
            {deleteMessage && <div className="alert">{deleteMessage}</div>}
            {users.map((user) => (
              <div
                key={user._id}
                className="flex justify-between p-2 bg-gray-700"
              >
                <span>
                  {user.name} - {user.email}
                </span>
                <button onClick={() => handleDeleteUser(user._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        );

      case "tab2":
        return (
          <div>
            {songs.map((song) => (
              <div
                key={song._id}
                className="flex justify-between p-2 bg-gray-700"
              >
                <span>
                  {song.title} - {song.artist}
                </span>
                <button onClick={() => handleDeleteSong(song._id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        );

      case "tab3":
        return (
          <div>
            {subscribers.map((sub) => (
              <div
                key={sub.id}
                className="flex justify-between p-2 bg-gray-700"
              >
                <span>
                  {sub.name} - {sub.email} - {sub.level}
                </span>
                <div>
                  <button className="mx-2">
                    <FontAwesomeIcon
                      icon={sub.isActive ? faToggleOn : faToggleOff}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const subscribers = [
    {
      id: 1,
      name: "Carol",
      email: "carol@example.com",
      level: "Gold",
      isActive: true,
    },
    {
      id: 2,
      name: "Dave",
      email: "dave@example.com",
      level: "Silver",
      isActive: false,
    },
    {
      id: 3,
      name: "Emma",
      email: "emma@example.com",
      level: "Silver",
      isActive: true,
    },
    {
      id: 4,
      name: "Fiona",
      email: "fiona@example.com",
      level: "Gold",
      isActive: true,
    },
  ];

  return (
    <div className=" pb-16 shadow-secondary min-h-screen bg-primary text-white ms:pl-25 ">
      <section className="pl-6 pr-6 sm:pl-28 sm:pr-28  max-h-screen:full">
        <div className="">
          <h1 className="sm:text-5xl text-2xl font-bold mb-5 pt-16">
            Admin Dashboard{" "}
          </h1>
        </div>

        <div className="rounded-2xl shadow-secondary grid grid-cols-3 mt-3 gap-4 pt-8 pb-8 sm:gap-6 ">
          <div className="bg-secondary p-5 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="sm:text-3xl mb-1 sm:mt-8 sm:mb-6 "
            />
            <h1>{users.length}</h1>
            <span className="items-center ">Total Users</span>
          </div>
          <div className="bg-secondary p-5 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon
              icon={faUsers}
              className="sm:text-3xl mb-1 sm:mt-8 sm:mb-2 "
            />
            <h1>4</h1>
            <span className="items-center grid">Subscribes</span>
          </div>
          <div className="bg-secondary p-5 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="sm:text-3xl mb-1 sm:mt-8 sm:mb-2 "
            />
            <h1>{songs.length}</h1>
            <span className="items-center grid">Total Songs</span>
          </div>
        </div>
        <div className="tabs border shadow-secondary border-secondary mt-5 p-3 sm:p-8 rounded-2xl sd:font-xs">
          <ul className="flex space-x-4 mb-4 sd:text-s">
            <li
              className={`cursor-pointer ${
                activeTab === "tab1" ? "text-yellow-300" : "text-gray-400"
              }`}
              onClick={() => {
                setActiveTab("tab1");
                fetchUsers();
              }}
            >
              All Users
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "tab2" ? "text-yellow-300" : "text-gray-400"
              }`}
              onClick={() => {
                setActiveTab("tab2");
                fetchSongs();
              }}
            >
              Songs
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "tab3" ? "text-yellow-300" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Subscriptions
            </li>
          </ul>
          <div className="tab-content p-1 bg-gray-700 rounded-lg">
            {renderTabContent()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
