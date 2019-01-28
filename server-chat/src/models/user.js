/*
**  Mise en place du model User qui sera ensuite utilisé pour manipuler la db
*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    }
});

const User = mongoose.model('User', schema);

module.exports.User = User;