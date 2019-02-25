import jwt from 'jsonwebtoken';
import config from '../config/config';

export default (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if(err) {
            return res.send(err);
        }
        next();
    });
};