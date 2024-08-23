const mongoose = require("mongoose");

const coordCreds = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: { type: Date, required: true },
});

const coordinatorCredSchema = mongoose.model('CoordinatorCred', coordCreds);

module.exports = coordinatorCredSchema;
