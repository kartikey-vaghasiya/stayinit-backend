const mongoose = require("mongoose");

FileSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    url: {
        type: String,
    },

    tags:{
        type: String,
    }
})

module.exports = mongoose.model("File", FileSchema)