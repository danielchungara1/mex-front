FROM node:14.5.0-alpine

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app
 
# Copies package.json to Docker environment
COPY package.json ./
COPY yarn.lock ./
 
# Installs all node packages
RUN npm install
 
# Copies everything over to Docker environment
RUN ls
COPY . .
 
# Uses port which is used by the actual application
EXPOSE 3000
 
# Finally runs the application
CMD ["npm","run","dev"]