FROM node:20.5.1-alpine

WORKDIR /app

# Copy and download dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy the source files into the image
COPY . .

EXPOSE 3000

CMD yarn start
