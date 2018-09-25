const mongoose = require('mongoose');

var todosSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        trim: true,
        default: 'pending'
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    }
})

var Todos = mongoose.model('Todos', todosSchema)

module.exports = Todos