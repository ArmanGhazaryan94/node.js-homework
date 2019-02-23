import express from 'express';
import users from './routes/users';
import products from './routes/products';
import auth from './routes/auth';
import bodyParser from 'body-parser';
import cookieParser from './middlewares/cookieParser';
import verifyToken from './middlewares/auth';
import passport from 'passport';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser);

app.use(passport.initialize());
require('./passport/strategies/facebook');
require('./passport/strategies/twitter');
require('./passport/strategies/google');

app.use('/api/users', verifyToken, users);
app.use('/api/products', verifyToken, products);
app.use('/api/auth', auth);

export default app;