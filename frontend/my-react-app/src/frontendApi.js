import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

const AI_API_BASE_URL = process.env.REACT_APP_AI_API_BASE_URL || 'http://localhost:8000';
//oof

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

//yo tfmyboi


export const gpt35turbo = async (userInput) => {
  try {
    console.log()
    const result = await axios.post(
      `${API_BASE_URL}/api/gpt35turbo`,
      {
        userInput: userInput,

        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      }
    );
    console.log(result)
    return result;
  } catch (error) {
    console.error(error);
    return 'An error occurred while processing your request.';
  }
};



export const gpt35turboTest2d = async () => {
  try {
    console.log()
    const result = await axios.post(
      `${API_BASE_URL}/api/gpt35turboTest2d`,
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
