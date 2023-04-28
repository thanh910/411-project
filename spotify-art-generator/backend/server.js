const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(cors());

app.get('/api/', async (req, res) => {
    const { departure, arrival } = req.query;
    const dep = encodeURIComponent(departure);
    const arr = encodeURIComponent(arrival);
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Replace with your own Google Maps API key
    console.log(apiKey)
    const apiUrl = ``;

    try {
        const response = await axios.get(apiUrl);
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving distance data');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));