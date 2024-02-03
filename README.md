#  User Authentication

This repository contains a simple user authentication system using Express, MongoDB, and a basic HTML/CSS/JS frontend.

## Overview

The project consists of a signup form where users can enter their username and password. The backend server, built with Express and MongoDB, handles the storage of user data. 

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/User-Authentication.git
    ```

2. Install dependencies:

    ```bash
User-Authentication
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:8080` to use the application.

## Frontend

The frontend is a simple HTML form styled with CSS. User input is sent to the server using a fetch request in the JavaScript file (`index.js`).

### HTML/CSS

The HTML structure is minimal, and styling is applied using the provided `style.css` file.

### JavaScript

The frontend logic is implemented in `index.js`, where a `fetch` request is used to send user data to the server.

## Backend

The backend is built with Express and uses MongoDB to store user information.

### Express Server

The server is set up to listen on port 8080. Routes handle user signup, checking for existing users before saving new ones.

### MongoDB

User data is stored in a MongoDB database. The connection is established using Mongoose.

### User Authentication

Passwords are hashed using bcrypt before being stored in the database. The server checks for existing users before saving new ones to prevent duplicates.

## Usage

1. Enter a username and password in the signup form.
2. Click the "Submit" button to send the data to the server.
3. Check the console for server responses.

