const mongoose = require(`mongoose`)

const Movies = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    img: {type: String, required: true},
    watched: {type: Boolean, default: false},
    rating: {
        type: Number,
        min: 0,
        max: 5,
        required: true,
        default: 0
      }
}) 