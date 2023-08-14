const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Your API credentials
const API_KEY = process.env.API_KEY;
const API_URL = 'http://www.omdbapi.com';

// Enable CORS for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Replace * with specific origins if needed
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// route for proxying API requests to omdbapi.com
app.all('/*', async (req, res) => {
  try {
    // Forward the request to the API while attaching your API credentials
    const response = await axios({
      method: 'get', // this api should only be GET requests
      url: `${API_URL}${req.url}&apikey=${API_KEY}`, // Proxy the entire URL including path and query string
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
