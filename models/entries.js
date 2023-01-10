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
    entry: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model("Entry", entrySchema);