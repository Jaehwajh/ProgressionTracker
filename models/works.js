const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        // require: true,
    },
    cloudinaryId: {
        type: String,
        // required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
});

module.exports = mongoose.model("Work", WorkSchema);