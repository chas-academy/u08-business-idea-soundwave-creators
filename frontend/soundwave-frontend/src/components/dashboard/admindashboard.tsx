import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp, faUsers, faDoorOpen, faUserPlus, faTrash, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
//import UserProfile from '../userprofile/userprofile';
//import { Link } from 'react-router-dom';
//faChartLine, 

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const users = [
        { id: 1, name: "Alice", email: "alice@example.com", created: "2021-06-01", isAdmin: false },
        { id: 2, name: "Bob", email: "bob@example.com", created: "2021-07-15", isAdmin: true },
        { id: 4, name: "David", email: "david@example.com", created: "2021-09-05", isAdmin: false },
        { id: 5, name: "Eve", email: "eve@example.com", created: "2021-10-10", isAdmin: true },
        { id: 6, name: "Frank", email: "frank@example.com", created: "2021-11-15", isAdmin: false },
        { id: 7, name: "Grace", email: "grace@example.com", created: "2021-12-20", isAdmin: true },
        { id: 8, name: "Harry", email: "harry@example.com", created: "2022-01-25", isAdmin: false }
    
    ];
    const subscribers = [
        { id: 1, name: "Carol", email: "carol@example.com", level: "Gold", isActive: true },
        { id: 2, name: "Dave", email: "dave@example.com", level: "Silver", isActive: false },
        { id: 3, name: "Emma", email: "emma@example.com", level: "Silver", isActive: true },
        { id: 4, name: "Fiona", email: "fiona@example.com", level: "Gold", isActive: true },
       
    ];
    const songs = [
        { id: 1, artist: "Ed Sheeran", songName: "Shape of You", albumName: "Divide" },
        { id: 2, artist: "Drake", songName: "Hotline Bling", albumName: "Views" },
        { id: 3, artist: "Ariana Grande", songName: "7 Rings", albumName: "Thank U, Next" },
        { id: 4, artist: "Taylor Swift", songName: "Shake It Off", albumName: "1989" },
        { id: 5, artist: "Post Malone", songName: "Circles", albumName: "Hollywood's Bleeding" },
        { id: 6, artist: "Billie Eilish", songName: "Bad Guy", albumName: "When We All Fall Asleep, Where Do We Go?" },
        { id: 7, artist: "Maroon 5", songName: "Girls Like You", albumName: "Red Pill Blues" },
        { id: 8, artist: "The Weeknd", songName: "Blinding Lights", albumName: "After Hours" }
    ];

    const handleToggleRole = (id: number) => {
        console.log('Toggle role for user:', id);
        // Here you would usually update the backend and then refresh the state
    };

    const handleDeleteUser = (id: number) => {
        console.log('Delete user:', id);
        // Here you would usually call the backend to delete the user and then update the state
    };

    const handleToggleSubscription = (id: number) => {
        console.log('Toggle subscription:', id);
        // Here you would typically update the subscription status in your backend and refresh the state
    };

    const handleDeleteSong = (id: number) => {
        console.log('Delete song:', id);
        // Backend call to delete a song and update state
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'tab1':
                return (
                    <div >
                        {users.map(user => (
                            <div key={user.id} className="flex justify-between p-2 bg-gray-700">
                                <span>{user.name} - {user.email} - {user.created}</span>
                                <div>
                                    <button onClick={() => handleToggleRole(user.id)} className="mx-2">
                                        <FontAwesomeIcon icon={user.isAdmin ? faToggleOn : faToggleOff} />
                                    </button>
                                    <button onClick={() => handleDeleteUser(user.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'tab2':
                return (
                    <div>
                        {subscribers.map(sub => (
                            <div key={sub.id} className="flex justify-between p-2 bg-gray-700">
                                <span>{sub.name} - {sub.email} - {sub.level}</span>
                                <div>
                                    <button onClick={() => handleToggleSubscription(sub.id)} className="mx-2">
                                        <FontAwesomeIcon icon={sub.isActive ? faToggleOn : faToggleOff} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'tab3':
                return (
                    <div>
                        {songs.map(song => (
                            <div key={song.id} className="flex justify-between p-2 bg-gray-700">
                                <span>{song.artist} - {song.songName} - {song.albumName}</span>
                                <button onClick={() => handleDeleteSong(song.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        ))}
                    </div>
                );

          }
      };
    return (
        <div className="min-h-screen bg-primary text-white ms:pl-25 ">
            <section className="pl-6 pr-6 sm:pl-10 sm:pl-28 sm:pr-28  max-h-screen:full">
                <div className=''><h1  className="sm:text-5xl text-2xl font-bold mb-5 pt-16">Admin Dashboard </h1><a href="#" className="text-text2  sm:text-s text-xs pb-1 flex items-center space-x-1" onClick={() => console.log('Logout clicked')}>
                        <FontAwesomeIcon icon={faDoorOpen} />
                        <span>Logout</span>
                    </a> 
                    </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8 sm:gap-12 ">
                    <div className="bg-secondary p-5 rounded-lg shadow-lg flex flex-col items-center ">
                        <FontAwesomeIcon icon={faUserPlus} className="sm:text-3xl mb-1 sm:mt-8 sm:mb-4 " />
                        <h1>15</h1>
                        <span>Total Users</span>
                    </div>
                    <div className="bg-secondary p-5 rounded-lg shadow-lg flex flex-col items-center">
                        <FontAwesomeIcon icon={faUsers} className="sm:text-3xl mb-1 sm:mt-8 sm:mb-2 " />
                        <h1>4</h1>
                        <span>Subscriptions</span>
                    </div>
                    <div className="bg-secondary p-5 rounded-lg shadow-lg flex flex-col items-center">
                        <FontAwesomeIcon icon={faThumbsUp} className="sm:text-3xl mb-1 sm:mt-8 sm:mb-4 " />
                        <h1>94</h1>
                        <span>Total Likes</span>
                    </div>
                    
                    {/* Repeat for other boxes */}
                </div>
                <div className="tabs border shadow-secondary border-secondary p-3 sm:p-8 rounded-2xl sd:font-xs">
                    <ul className=" flex space-x-4 mb-4 sd:text-s">
                        <li className={`cursor-pointer ${activeTab === 'tab1' ? 'text-yellow-300' : 'text-gray-400'}`} onClick={() => setActiveTab('tab1')}>All Users</li>
                        <li className={`cursor-pointer ${activeTab === 'tab2' ? 'text-yellow-300' : 'text-gray-400'}`} onClick={() => setActiveTab('tab2')}>Subscriptions</li>
                        <li className={`cursor-pointer ${activeTab === 'tab3' ? 'text-yellow-300' : 'text-gray-400'}`} onClick={() => setActiveTab('tab3')}>Songs</li>
                        {/* <li className={`cursor-pointer ${activeTab === 'tab4' ? 'text-yellow-300' : 'text-gray-400'}`} onClick={() => setActiveTab('tab4')}>Your Profile</li> */}
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
