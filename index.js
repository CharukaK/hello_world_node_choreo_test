// app.js

// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port number
const PORT = 3000;

// Create a route for the root URL that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
