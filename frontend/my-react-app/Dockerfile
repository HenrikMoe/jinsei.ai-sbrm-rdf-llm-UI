# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files for the frontend
COPY ./package*.json ./

# Install dependencies for the frontend
RUN npm install

# Copy the entire frontend app to the container
COPY . /app/

# Build the frontend app for production
RUN npm run build

# Expose the port on which your React app will run (typically 80)
EXPOSE 80

# Define the command to serve your React app (using a simple HTTP server)
CMD [ "npx", "serve", "-s", "build" ]
