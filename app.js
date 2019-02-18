import express from 'express';
import users from './routes/users';
import products from './routes/products';
import bodyParser from 'body-parser';
import cookieParser from './middlewares/cookieParser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser);

app.use('/api/users', users);
app.use('/api/products', products);

export default app;