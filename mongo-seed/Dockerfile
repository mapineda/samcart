FROM mongo
COPY cars.json /cars.json
CMD mongoimport --host mongo --db cars --collection cars --type json --file /cars.json --jsonArray