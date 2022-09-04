// const Room = require('../models/room')

function handler(socket) {
    // socket.on('get-users', async ({ room: name }, cb) => {
    //     const room = await Room.findOne({ name })
    //     cb([...room.users])
    // })

    socket.on('join', async ({ _id, room }) => {
        socket.join(room)
        socket.to(room).emit('newcomer', { _id })
    })
}

module.exports = {
    handler
}
