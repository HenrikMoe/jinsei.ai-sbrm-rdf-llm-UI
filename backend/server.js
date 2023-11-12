const express = require('express');
const cors = require('cors'); // Import the 'cors' middleware
const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed
const OpenAI =require("openai");
const axios = require('axios');


// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());



// Define a route that doesn't require authentication
app.get('/api/some-route', (req, res) => {
  // Your route logic goes here
  res.json({ message: 'This route does not require authentication.' });
});



const { CHAT_KEY } = process.env;
console.log(CHAT_KEY)
app.post('/api/chatgpt', async (req, res) => {
  const { prompt } = req.body; // Extract the 'prompt' from the request body
  console.log(prompt)
  const chatgptRequest = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: prompt }, // Construct the message object
    ],
    temperature: 0.7,
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${CHAT_KEY}`,
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



const openai = new OpenAI();

async function gpt35turboTest1() {
  var string = 'what do i use this for?'
  const completion = await openai.chat.completions.create({
  messages: [{"role": "system", "content": "You are a helpful assistant to output JSON."},
      {"role": "user", "content": "what do i use this for?"},
      {"role": "assistant", "content": "Jinsei Luciano is for creating, using, and mangaging financial disclosure reports and report processes."},





//fuck ton of model questions





      {"role": "user", "content": string},
      ],
      model: "gpt-3.5-turbo-1106",
       response_format: { type: "json_object" },
});

console.log(completion.choices[0]);
  console.log(completion.choices[0].message.content);

}

var assistant;
var thread;
var run;
var message;

async function gpt35turboTest2a() {

   assistant = await openai.beta.assistants.create({
    name: "Jinsei Chat",
    instructions: "You are an assistant in Jinsei Corp's products.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview"
  });

}


async function gpt35turboTest2b() {
   thread = await openai.beta.threads.create();
}


async function gpt35turboTest2c() {
   message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: "What is Jinsei Luciano?"
    }
  );
  console.log(message.data);

}

async function gpt35turboTest2d() {
   run = await openai.beta.threads.runs.create(
    thread.id,
    {
      assistant_id: assistant.id,
      instructions: "Understand that Jinsei Luciano is a tool for creating, using, and mangaging financial disclosure reports and report processes. "
    }
  );
}

async function gpt35turboTest2e() {
   run = await openai.beta.threads.runs.retrieve(
    thread.id,
    run.id
  );
  messages = await openai.beta.threads.messages.list(
  thread.id
);
console.log(thread)
try{
  console.log(messages.data[0].content)
  console.log(messages.data[1].content)
}catch(e){console.log(e)}


console.log(run)
}



app.post('/api/gpt35turbo', async (req, res) => {
    console.log('ready for training')
    gpt35turboTest1()
    // await gpt35turboTest2a()
    // await gpt35turboTest2b()
    // await gpt35turboTest2c()
    // await gpt35turboTest2d()
  //  runConversation().then(console.log).catch(console.error);


    res.json({ message: 'trainign time.' });
});

app.post('/api/gpt35turboTest2d', async (req, res) => {
    console.log('ready for training')
    //gpt35turboTest1()
    gpt35turboTest2e()
  //  runConversation().then(console.log).catch(console.error);


    res.json({ message: 'trainign time.' });
});



// In production, this could be your backend API or an external API
function getCurrentWeather(location, unit = "fahrenheit") {
  if (location.toLowerCase().includes("tokyo")) {
    return JSON.stringify({ location: "Tokyo", temperature: "10", unit: "celsius" });
  } else if (location.toLowerCase().includes("san francisco")) {
    return JSON.stringify({ location: "San Francisco", temperature: "72", unit: "fahrenheit" });
  } else if (location.toLowerCase().includes("paris")) {
    return JSON.stringify({ location: "Paris", temperature: "22", unit: "fahrenheit" });
  } else {
    return JSON.stringify({ location, temperature: "unknown" });
  }
}

async function runConversation() {
  // Step 1: send the conversation and available functions to the model
  const messages = [
    { role: "user", content: "What's the weather like in San Francisco, Tokyo, and Paris?" },
  ];
  const tools = [
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] },
          },
          required: ["location"],
        },
      },
    },
  ];


  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages: messages,
    tools: tools,
    tool_choice: "auto", // auto is default, but we'll be explicit
  });
  const responseMessage = response.choices[0].message;

  // Step 2: check if the model wanted to call a function
  const toolCalls = responseMessage.tool_calls;
  if (responseMessage.tool_calls) {
    // Step 3: call the function
    // Note: the JSON response may not always be valid; be sure to handle errors
    const availableFunctions = {
      get_current_weather: getCurrentWeather,
    }; // only one function in this example, but you can have multiple
    messages.push(responseMessage); // extend conversation with assistant's reply
    for (const toolCall of toolCalls) {
      const functionName = toolCall.function.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(toolCall.function.arguments);
      const functionResponse = functionToCall(
        functionArgs.location,
        functionArgs.unit
      );
      messages.push({
        tool_call_id: toolCall.id,
        role: "tool",
        name: functionName,
        content: functionResponse,
      }); // extend conversation with function response
    }
    const secondResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: messages,
    }); // get a new response from the model where it can see the function response
    return secondResponse.choices;
  }
}

app.post('/api/user-info', async (req, res) => {
  try {
    // Extract the data you want to write to the "admin" database from req.body
    const { given_name, family_name, email, locale } = req.body; // Replace with actual keys

    // Access the "admin" database
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db('');

    // Construct the document to be inserted into a specific collection
    const document = {
      key1: given_name, // Replace with actual field name
      key2: family_name, // Replace with actual field name
      key3: email, // Replace with actual field name
      key4: locale, // Replace with actual field name

    };

    // Access a specific collection within the "admin" database
    const collection = db.collection('userInfo'); // Replace with your collection name

    // Insert the document into the collection
    const result = await collection.insertOne(document);

    console.log('Inserted a document with _id:', result.insertedId);

    res.json({ message: 'Data written to the admin database successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});
