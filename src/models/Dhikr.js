const mongoose = require('mongoose');

const dhikrSchema = new mongoose.Schema({
    total: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Dhikr', dhikrSchema);
