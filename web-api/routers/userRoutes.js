const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userControllers'); // Ensure correct path

userRoutes.get('/users', userController.getAllUser); // Define route

module.exports = userRoutes;
