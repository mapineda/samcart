# SamCart Coding Challenge

## Requirements:
- npm
- node.js
- express
- docker
- react

## Optional 
- [insomnia]('https://insomnia.rest/')

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

3. Navigate to localhost:3000 to see application

4. navigate to http://localhost:3000/cars/list to see all cars

## User Testing:

### How to run:

1. open up to terminal tabs
2. navigate to `server` dir in one tab
3. navigate to `client` dir in another tab
4. in each respective tab, run `npm start`

server should be running on localhost:5000

client should be running on localhost:3000

5. navigate to localhost:3000 to see application
6. navigate to http://localhost:3000/cars/list to see all cars
7. click *update* button on table to get car by id 

### Additional Resources:
- I've included my insomnia worspace in json form for easy CRUD requests

### What I learned:
- learned that I have to relearn the MERN environment after being at a python/django shop for 3 yrs

### What I would improve for next time:
- add automated testing
- Seed the mongo db image
- Styling
- Add delete to front-end
- add env-var file