# REVIMO - Get Genuine Mobile Reviews

<p align="center">
  <img src="https://i.ibb.co/X3Cx0j9/photo-collage-png.png" alt="REVIMO" width="100%" style="max-width: 100%; height: auto;">
</p>

REVIMO is a full-stack web application that allows users to review smartphones. It consists of two main parts: a frontend built with React (Next.js) and a backend built with Node.js and Express. This project is designed to provide a platform where users can sign up, log in, and submit reviews for various smartphones.

---

## Dummy Credentials

   - Username: chetan9@gmail.com
   - password: chetan123

## Features

- **Frontend**:

  - User signup and login.
  - Smartphone review system (view and submit reviews).
  - Responsive design with mobile and desktop support.

- **Backend**:

  - RESTful API built with Node.js and Express.
  - Authentication and user management with JWT tokens.
  - MongoDB integration for storing user and review data.

---

## Frontend Setup

1.  **Navigate to the `frontend` directory**:

    bash

    Copy code

    `cd frontend`

2.  **Install dependencies**:

    bash

    Copy code

    `npm install`

3.  **Run the development server**:

    bash

    Copy code

    `npm run dev`

4.  The frontend will be accessible at `http://localhost:3000`.

---

## Backend Setup

1.  **Navigate to the `backend` directory**:

    bash

    Copy code

    `cd backend`

2.  **Install dependencies**:

    bash

    Copy code

    `npm install`

3.  **Set up environment variables** \(Create a `.env` file in the `backend` directory):

    bash

    Copy code

    `MONGO_URI=YOUR MONGO CONNECTION STRING
JWT_SECRET=your_jwt_secret`

4.  **Run the backend server**:

    bash

    Copy code

    `node server.js`

5.  The backend API will be accessible at `http://localhost:5000`.

