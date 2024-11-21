FROM node:20
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
# Expose a port (e.g., 3000) for the application
EXPOSE 3000
# Start the React app when the container runs
CMD ["npm", "start"]