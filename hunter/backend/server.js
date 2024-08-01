// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample route
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

// User registration route
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Logic to handle registration
    res.send('User registered');
});

// User login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Logic to handle login
    res.send('User logged in');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});