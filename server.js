const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // assuming you have DB connection setup

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/v1', require('./Routes/auth'));
app.use('/api/v1', require('./Routes/courses'));
app.use('/api/v1', require('./Routes/courseoutcome'));
app.use('/api/v1', require('./Routes/addStudent'));
app.use('/api/v1', require('./Routes/facultyprofile'));

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
