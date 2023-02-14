const mongoose = require('mongoose')

const StorageSchema = new mongoose.Schema({
    url: { type: String },
    filename: { type: String },
}, {
    timestamps: true, //Todo createdAt, UpdatedAt
    versionKey: false
});

module.exports = mongoose.model("storage", StorageSchema)