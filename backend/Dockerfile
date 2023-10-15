# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files for the backend
COPY ./package*.json ./

# Install dependencies for the backend
RUN npm install

# Copy the entire backend app to the container
COPY . /app/

# Expose the port on which your Express app will run (e.g., 3000)
EXPOSE 3000

# Define the command to start your Express app
CMD [ "node", "server.js" ]
