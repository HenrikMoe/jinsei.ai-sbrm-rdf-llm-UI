const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const OpenAI = require("openai");
const axios = require('axios');

// Use the 'cors' middleware to enable CORS for all routes
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const { CHAT_KEY } = process.env;
console.log(CHAT_KEY);

// Function to validate matrix position from XML
async function validateMatrixPosition(matrixPosition) {
    // Placeholder XML parsing and validation logic
    try {
        // Parse the matrix position from XML
        const { row, column } = matrixPosition;
        
        // Placeholder validation logic
        const isValid = true; // Placeholder for actual validation logic
        
        return isValid;
    } catch (error) {
        console.error('Error validating matrix position:', error);
        return false; // Return false if an error occurs during validation
    }
}

app.post('/api/chatgpt', async (req, res) => {
    const { matrixPosition } = req.body; // Extract the 'matrixPosition' from the request body
    console.log(matrixPosition);

    // Validate the matrix position
    const isValidMatrixPosition = await validateMatrixPosition(matrixPosition);

    // Construct prompt based on validation status
    const prompt = `User: Help me with my sheet compatibility.\nAssistant: `;
    const message = isValidMatrixPosition ? `The matrix position (${matrixPosition.row}, ${matrixPosition.column}) is compatible.` : `The matrix position (${matrixPosition.row}, ${matrixPosition.column}) is not compatible.`;

    const chatgptRequest = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: prompt },
            { role: 'assistant', content: message }
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
