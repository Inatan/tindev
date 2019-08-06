const {Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type:String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        ref: 'Dev',
        type: Schema.Types.ObjectId,
    }],
    
    dislikes: [{
        ref: 'Dev',
        type: Schema.Types.ObjectId,
    }],
}, {
    timestamps: true
});

module.exports = model('Dev', DevSchema);