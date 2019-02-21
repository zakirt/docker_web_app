# Docker Web App
Example of using Docker with Node and Redis. Also contains example of debugging the docker app using VS Code debugger.

## Prerequisites
Make sure you have [Node](https://nodejs.org/en/) and [Docker](https://www.docker.com/) installed on your machine.

## Running app inside docker container
To run the app inside docker, enter the following command in the terminal:
```
docker-compose build
docker-compose up -d
```

## Debugging the app inside docker container
```
docker-compose -f docker-compose.debug.yml build
docker-compose -f docker-compose.debug.yml up -d
```

## Resources
* [How to Debug a Node.js app in a Docker Container](https://blog.risingstack.com/how-to-debug-a-node-js-app-in-a-docker-container/)
* [Docker compose reference](https://docs.docker.com/compose/reference/overview/)