import express from 'express';
import bodyParser from 'express';

import mongoose from 'mongoose';

import router from './controllers/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("WELCOME!");
});

app.use('/api', router);



app.listen(3000, () => {
    console.log('Server is running');
})