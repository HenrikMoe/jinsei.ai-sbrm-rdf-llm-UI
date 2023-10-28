import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

console.log(API_BASE_URL)
export const sendChatRequest = async (input) => {
  try {
    console.log(input)
    const result = await axios.post(
      `${API_BASE_URL}/api/chatgpt`,
      { prompt: input },
      {
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      }
    );
    console.log(result)
    return result.data.text;
  } catch (error) {
    console.error(error);
    return 'An error occurred while processing your request.';
  }
};
