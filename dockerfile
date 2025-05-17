# 1. Use node base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# 4. Copy all source files
COPY . .

# 5. Build the project
RUN npm run build

# 6. Expose port
EXPOSE 3000

# 7. Start the server from built files
CMD ["node", "dist/index.js"]
