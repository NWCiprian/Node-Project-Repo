const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    repsonded: { type: Boolean, default: false }
});

module.exports = recipientSchema;