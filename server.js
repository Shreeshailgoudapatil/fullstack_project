// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Dish } = require('./db'); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define API routes
app.get('/api/dishes', async (req, res) => {
    try {
        const dishes = await Dish.findAll(); // Ensure Dish model correctly interacts with your database
        res.json(dishes);
    } catch (error) {
        console.error('Error fetching dishes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Other routes if any

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
