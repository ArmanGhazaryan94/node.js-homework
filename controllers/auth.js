import jwt from 'jsonwebtoken';
import config from '../config/config';

const user = {
    email: 'user@example.com',
    password: '123456',
    userName: 'userName'
};

exports.login = (req, res) => {
    const {email, password} = req.body;
    if (checkUser(email, password)) {
        const token = jwt.sign({email}, config.jwtSecret);
        res.json({
            code: 200,
            message: "OK",
            data: {
                user: {
                    email,
                    userName: user.userName
                }
            },
            token
        })
    } else {
        res.json({
            code: 404,
            message: "Not found",
        })
    }
};

exports.facebookCallback = function (req, res) {
    res.json({
        code: 200,
        message: 'OK'
    });
};

exports.twitterCallback = function (req, res) {
    res.json({
        code: 200,
        message: 'OK'
    });
};

exports.googleCallback = function (req, res) {
    res.json({
        code: 200,
        message: 'OK'
    });
};

function checkUser(email, password) {
    return email.toLowerCase() === user.email && password === user.password;
}