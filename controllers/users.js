import users from './users.json';

exports.getAllUsers = (req, res) => {
    res.json(users);
};