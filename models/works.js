const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    tag: {
        type: String,
        require: true,
    },
    cloudinaryId: {
        type: String,
        require: true,
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
        require: true,
    }
});

module.exports = mongoose.model("Work", WorkSchema);