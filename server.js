const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const userData = require('./users.json');

// Serve static files from the "public" directory under the "/assets" path
app.use('/assets', express.static('public'));

// Root route to serve HTML with CSS and an image
app.get('/', (req, res) => {
    res.send("<link rel='stylesheet' href='/assets/css/styles.css'><h1 style='color: red'><img src='/assets/img/promise.webp'>NodeJS Project</h1>");
});

// Route to get user data from the JSON file
app.get('/users', (req, res) => {
    res.send(userData);
});

// Start the server and listen on the port defined in the .env file or default to 80
app.listen(process.env.PORT, ()=> {
    console.log("Server is running on http://localhost");
})
