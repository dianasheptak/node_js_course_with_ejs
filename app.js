const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const db = 'mongodb+srv://diana:1111@cluster0.mip8v.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0'
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const apiPostRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');

mongoose
    .connect(process.env.MONGO_DB_URL, {})
    .then((res) => console.log('connected to MongoDB'))
    .catch((err) => console.log(err));

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
   const title = 'Home';
   res.render(createPath('index'), { title });
});

app.listen(process.env.PORT, (error) => {
   error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.use(postRoutes);

app.use(contactRoutes);

app.use(apiPostRoutes)

app.use((req, res) => {
   const title = 'Error Page';
   res
       .status(404)
       .render(createPath('error'), { title });
});