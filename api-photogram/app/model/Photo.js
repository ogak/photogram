const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PhotoSchema = new schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    },
    photo_url: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('photo', PhotoSchema);