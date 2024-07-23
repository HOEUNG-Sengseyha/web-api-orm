const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const morgan = require('morgan');
const userRoutes = require("./web-api/routers/userRoutes")

const app = express(); // Initialize the Express application

app.set("view engine", 'ejs');
app.use('/assets', express.static('public'));
app.use(express.json()); // Middleware to parse JSON bodies

// Logging middleware
app.use(morgan('dev'));

// Use the user routes
app.use(userRoutes);

// Start the server
app.listen(process.env.PORT, ()=> {
    console.log("Server is running on http://localhost");
})
