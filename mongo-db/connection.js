const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/homework');

db.then(() => console.log('connected dbbb'));

