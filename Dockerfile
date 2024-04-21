# Use the official Node.js image as base
FROM node:18-alpine

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000

# Run the Next.js application
CMD ["npm", "run", "dev"]
