
const mongoose = require("mongoose");


const studentCred = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: {type: Date, required: true},
});

const studentCredSchema = mongoose.model('studentCred', studentCred);

module.exports = studentCredSchema;
