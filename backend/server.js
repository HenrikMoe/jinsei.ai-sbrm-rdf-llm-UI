const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed

// Define a route that doesn't require authentication
app.get('/api/some-route', (req, res) => {
  // Your route logic goes here
  res.json({ message: 'This route does not require authentication. change' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
