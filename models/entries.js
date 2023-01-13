const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
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
    },
    tag: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Entry", entrySchema);