const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Note = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Note', Note)