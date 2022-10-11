FROM node

LABEL "rickandmorty.appNode" = "RickandMorty server app"
LABEL maintainer = "supercrew3@gmail.com"
LABEL version="1.0"

#Create work space folder
RUN mkdir -p /opt/app

WORKDIR /opt/app

#Installing packages from package.json
COPY package.json .
RUN npm install --quite --legacy-peer-deps

#Installing nodemon
RUN npm install nodemon -g --quite

#Copy the application
COPY . .

#App running in this port 3000
EXPOSE 3000

# Initiate the application in the container
ENV NODE_PATH=./build

RUN npm run build