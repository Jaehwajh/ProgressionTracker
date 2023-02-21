const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    todo: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
    }
});

module.exports = mongoose.model("Todo", todoSchema);