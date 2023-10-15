# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files for the backend
COPY ./package*.json ./

# Install dependencies for the backend
RUN npm install

# Copy the entire backend app to the container
COPY . /app/

# Use Babel to transpile your code
RUN npm install -g @babel/core @babel/preset-env
RUN npm install --save-dev @babel/preset-env @babel/cli
COPY .babelrc .babelrc

RUN npx babel src --out-dir dist

# Expose the port on which your Express app will run (e.g., 3000)
EXPOSE 3000

# Define the command to start your transpiled Express app
CMD [ "node", "dist/server.js" ]
