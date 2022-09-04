const { Schema, model } = require('mongoose')

const User = require('./user')

const RoomSchema = new Schema({
    name: {
        type: String,
        required: [true, '*Room name is required'],
        unique: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: User,
    }]
})

const Room = model('rooms', RoomSchema);
module.exports = Room;
