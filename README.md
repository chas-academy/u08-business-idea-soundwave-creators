[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_zMNInW_)

# Music Streaming App

A user-friendly music streaming app designed to provide seamless music streaming, playlist creation, and social interaction for music enthusiasts.

## Table of Contents
1. [Project Title and Description](#project-title-and-description)
2. [Features](#features)
3. [Installation](#installation)
    - [Built With](#built-with)
    - [Prerequisites](#prerequisites)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
    - [Running Tests](#running-tests)
4. [Usage](#usage)
5. [API Documentation](#api-documentation)
    - [Base URL](#base-url)
    - [Endpoints](#endpoints)
        - [User Authentication](#user-authentication)
        - [Music](#music)
        - [Playlists](#playlists)
6. [Contributing](#contributing)
7. [Contact Information](#contact-information)
8. [Authors](#authors)

## Project Title and Description
**Project Title:** Music Streaming App

**Description:** 
A user-friendly music streaming app designed to provide seamless music streaming.

## Features
- User Login
- User registration and authentication
- Password reset
- User Profile
- Music online streaming
- Playlist and song management
- Add song to User playlist
- Search option
- Admin dashboard with CRUD function(delete)
- Contact us
- Responsive design for mobile and desktop

## Installation
Clone the repository to your local machine:
git clone https://github.com/chas-academy/u08-business-idea-soundwave-creators.git

### Built With
- React - used for the client side.
- Node.js - Server environment.
- Express - Web framework for Node.js.
- MongoDB - Database.
- Other technologies/libraries: TailwindCSS, oauth2, google,  etc.

### Prerequisites
Before starting, ensure you have the following installed:
- Node.js and npm installed
- MongoDB installed and running

### Backend Setup
1. Clone the repository:
   git clone https://github.com/chas-academy/u08-business-idea-soundwave-creators.git

2. Navigate to the backend directory:
cd ../backend

3. Install dependencies:
npm install (find out about our dependencies in package.json)

4. Create a .env file and add your environment variables:
env
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
EMAIL=your-email-address
GMAIL_CLIENT_ID=your-client-id
GMAIL_CLIENT_SECRET="your-client-secret
GMAIL_REFRESH_TOKEN=your-refresh-token

5. Start the backend server:
npm start
Start the server (by default, it will start on http://localhost:3000):

### Frontend Setup
1. Navigate to the frontend directory:
cd ../frontend
2. Install dependencies:
npm install (find out about our dependencies in package.json) 

3. Start the frontend development server:
npm start
Start the server (by default, it will start on http://localhost:5173):

### Running Tests
- Run backend tests:
cd backend
npm test 

- Run frontend tests:
cd ../frontend
npm test


## Usage
- Open your browser and navigate to http://localhost:5173/login.
- Register a new user account or log in with existing credentials.
- Explore the music library and enjoy streaming music.
## API Documentation

### Base URL
baseURL: 'http://localhost:3000/api
### Endpoints
**User Authentication**
- POST /authController/signup 
- POST /authController/login 

**Music**
- GET /music - Get a list of all music
- GET /music/:id - Get details of a specific track

**Playlist**
- POST /playlists - Create a new playlist
- GET /playlists - Get a list of all playlists
- PUT /playlists/:id - Update a playlist
- DELETE /playlists/:id - Delete a playlist

## Contributing
Contributions are welcome! Please follow these steps to contribute to the project:

1. Fork the repository.

- Go to the project repository on GitHub.
- Click the "Fork" button at the top-right corner of the page.
## Contact Information
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.
## Authors
Soundwave creators

