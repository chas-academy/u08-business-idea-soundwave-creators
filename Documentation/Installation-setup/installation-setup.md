### How to clone our project locally 🖥️

## Backend Setup

1. **Clone the Repository**

![alt text](<Screenshot 2024-06-05 140443.png>)

- open a new terminal and type in the following commands

```sh
git clone https://github.com/chas-academy/u08-business-idea-soundwave-creators.git

cd your_backend_folder
```

2. **Install Dependencies**

```sh
npm install
```

- make sure your ´package.json´ includes the following dependencies

```sh
{
  "name": "soundwave-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon index.ts",
    "test": "jest tests/*"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.7.2",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "google-auth-library": "^9.10.0",
    "googleapis": "^137.1.0",
    "hbs": "^4.2.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.0",
    "nodemailer": "^6.9.13",
    "passport": "^0.7.0",
    "passport-google-oauth20": "^2.0.0"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jsonwebtoken": "^9.0.6",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^20.12.8",
    "@types/nodemailer": "^6.4.15",
    "nodemon": "^3.1.0",
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.4.5"
  }
}

```

4. **Start the Backend server**

```sh
npm run dev
```

5. Server should now be running on http://localhost:3000

## Frontend Setup

1. **cd into the Frontend folder in a new terminal**

```sh
cd your_frontend_folder
```

2. **Install Dependencies**

```sh
npm install
```

- Make sure you have all the needed dependencies

```sh
{
  "name": "soundwave-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.5.2",
    "@fortawesome/free-solid-svg-icons": "^6.5.2",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@react-oauth/google": "^0.12.1",
    "autoprefixer": "^10.4.19",
    "axios": "^1.7.2",
    "postcss-cli": "^11.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-google-login": "^5.2.2",
    "react-icons": "^5.2.1",
    "react-router-dom": "^6.23.1",
    "react-slick": "^0.30.2",
    "react-toastify": "^10.0.5",
    "slick-carousel": "^1.8.1",
    "tailwindcss": "^3.4.3"
  },
  "devDependencies": {
    "@types/node": "^20.12.11",
    "@types/react": "^18.2.6",
    "@types/react-dom": "^18.2.4",
    "@types/react-slick": "^0.23.3",
    "@typescript-eslint/eslint-plugin": "^5.8.1",
    "@typescript-eslint/parser": "^5.8.1",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.19.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.19",
    "typescript": "^5.1.3",
    "vite": "^4.3.9"
  }
}
```

3. **Start the frontend server**

```sh
npm run dev
```

- Your application should now be running locally on http://localhost:5173
