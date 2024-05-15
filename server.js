// Import necessary modules
const express = require('express');

// Create an Express application
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if set, otherwise default to 3000

// Define routes, middleware, etc.

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
