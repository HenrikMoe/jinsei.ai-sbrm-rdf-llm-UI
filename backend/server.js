const express = require('express');
const cors = require('cors'); // Import the 'cors' middleware
const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed

// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());

// Define a route that doesn't require authentication
app.get('/api/some-route', (req, res) => {
  // Your route logic goes here
  res.json({ message: 'This route does not require authentication.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
