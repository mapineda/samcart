#! /bin/bash

mongoimport --host mongo --db cars --collection cars --type json --file /mongo-seed/cars.json --jsonArray