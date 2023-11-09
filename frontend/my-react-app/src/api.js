import axios from 'axios';
let backendUrl;

if (process.env.NODE_ENV === 'development') {
  // Local development URL
  backendUrl = 'http://localhost:3000/api'; // Replace with your local backend URL
} else {
  // Remote production URL
  backendUrl = 'http://35.167.255.30:3000/api'; // Replace with your remote backend URL
}

const api = {
  sendUserInfo: (requestData) => {
    console.log(axios)
    return axios
      .post(`${backendUrl}/user-info`, requestData) // Updated the URL to include backendUrl
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
