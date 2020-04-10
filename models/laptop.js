const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    // id: Number,
    brand: { type: String, required: true},
    model: { type: String, required: true},
    ram: { type: String, required: true},
    processor: { type: String, required: true},
    storage: { type: String, required: true},
    condition: { type: String, required: true},
    misc: { type: String, required: true},
    quantity: { type: String, required: true},
    price: { type: String, required: true},
    image: { type: String, default: 'https://placekitten.com/640/360'}
});

module.exports = mongoose.model("Laptop", laptopSchema);
// const laptop = mongoose.model("Laptop", laptopSchema);