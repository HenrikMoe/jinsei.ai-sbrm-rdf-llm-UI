import axios from 'axios';
let backendUrl;

const backendUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';


const api = {
  sendUserInfo: (requestData) => {
    console.log(axios)
    return axios
      .post(`${backendUrl}/api/user-info`, requestData) // Updated the URL to include backendUrl
      .then((response) => {
        // Handle the response data here
        return response.data;
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        throw error;
      });
  },
};

export default api;
