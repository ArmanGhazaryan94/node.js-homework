import app from './app';
const port = process.env.PORT || 6789;
app.listen(port, () => console.log(`App listening on port ${port}`));