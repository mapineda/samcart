import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const Schema = mongoose.Schema;

const Car = new Schema(
    {
        make: {type: String, required: true },
        model: {type: String, required: true },
        package: {type: String, required: true },
        color: {type: String, required: true },
        year: {type: Date, required: true },
        category: {type: String, required: true},
        mileage: {type: Number, required: true},
        price: {type: Number, required: true},
        id: {type: String, unique: true, default: nanoid(8)}
    },
    { timestamps: true },
)

module.exports = mongoose.model('cars', Car)
