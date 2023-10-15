let backendUrl;

if (process.env.NODE_ENV === 'development') {
  // Local development URL
  backendUrl = 'http://localhost:3000/api'; // Replace with your local backend URL
} else {
  // Remote production URL
  backendUrl = 'http://54.200.183.86:3000/api'; // Replace with your remote backend URL
}

const api = {
  someRoute: `${backendUrl}/some-route`,
  // Define other API routes as needed
};

export default api;
