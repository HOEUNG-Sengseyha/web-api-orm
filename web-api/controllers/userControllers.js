const userData = require('../models/users.json'); // Ensure correct path

const getAllUser = (req, res) => {
    const { query } = req;
    if (query.username) {
        const filteredUsers = userData.filter(u => u.username === query.username);
        res.json(filteredUsers);
    } else {
        res.json(userData);
    }
};

module.exports = {
    getAllUser,
};
