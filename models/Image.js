const mongoose = require("mongoose")

const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },

    flatOrHostelId: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },

    tags: {
        type: [String],
    }
})

module.exports = mongoose.model("Image", ImageSchema )