const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: {type: String },
        model: {type: String },
        package: {type: String },
        color: {type: String },
        year: {type: String },
        category: {type: String },
        mileage: {type: Number },
        price: {type: Number },
        id: {type: String, unique: true, default: nanoid(8)}
    },
    { timestamps: true },
)

module.exports = mongoose.model('cars', Car)
