const express = require('express');
const cors = require('cors'); // Import the 'cors' middleware
const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed
const openai = require('openai');
const axios = require('axios');


// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());

app.use(express.json());

// Define a route that doesn't require authentication
app.get('/api/some-route', (req, res) => {
  // Your route logic goes here
  res.json({ message: 'This route does not require authentication.' });
});

const OPENAI_API_KEY = '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';
app.post('/api/chatgpt', async (req, res) => {
  const { prompt } = req.body; // Extract the 'prompt' from the request body

  const chatgptRequest = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: prompt }, // Construct the message object
    ],
    temperature: 0.7,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`,
  };

  try {
    axios
      .post('https://api.openai.com/v1/chat/completions', chatgptRequest, {
        headers: headers,
      })
      .then((response) => {
        console.log('Response:', response.data.choices[0].message.content);
        res.json({ text: response.data.choices[0].message.content });
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const { MONGODB_URI } = process.env;

// Create a MongoClient with the MongoDB URI and configure the Stable API version
const client = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
