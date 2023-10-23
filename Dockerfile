# Node.js base image
FROM node:20.5.1-alpine

# Docker working directory
WORKDIR /app

# Copy and download dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy the source files into the image
COPY . .

# Application start scripts
EXPOSE 3000
CMD yarn start
