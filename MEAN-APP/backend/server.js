const express = require('express');
const mongoose = require('mongoose');
//const dbConnectionString = require('../Database/db');
const dbConnectionString = process.env.MONGO_URI; // Use environment variable
const usersRoutes = require('./routes/userAPI');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB using the connection string from db.js
mongoose.connect(dbConnectionString)
.then(() => {
    console.log('Connected to MongoDB');
    app.use('/api', usersRoutes);

        // Start the server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});