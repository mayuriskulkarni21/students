const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
    username: String,
    password: String
})

mongoose.model('users', formSchema);