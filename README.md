# SamCart Coding Challenge

## Requirements:
- npm
- node.js
- express
- docker
- react

## Packages Used:
- express
- mongoose
- bodyparser
- cors
- nanoid

## Setup:

### Unfortunately I couldnt get my mongo image seeded with fixtures
Therefore, docker-compose cannot be used in this manner.
If i did get mongo image seeded, then one would:

1. build the docker images and tag them accordingly 

`docker build -t "react-app" ./client/`

`docker build -t "api-server" ./server/`

`docker build -t "api-server" ./server/`

2. Run `docker-compose up`

3. Navigate to localhost:3000

## User Testing:

### How to run:

1. open up to terminal tabs
2. navigate to `server` dir in one tab
3. navigate to `client` dir in another tab
4. in each respective tab, run `npm start`

server should be running on localhost:5000

client should be running on localhost:3000

5. navigate to localhost:3000 to see application


