# Base image
FROM node:alpine

# Directory building
WORKDIR /app
COPY . /app

# Install global dependencies
RUN npm i -g @nestjs/cli

# Install node dependencies
RUN npm i

CMD ["npm", "run", "start:dev"]