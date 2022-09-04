const { faker } = require('@faker-js/faker')

const Room = require('../models/room')

function roomName() {
    return (
        `${faker.word.adjective()}-${faker.word.noun()}`
            .replace(/\s/g, '-')
    )
}

async function uniqueRoomName() {
    const name = roomName()
    if(
        await Room.countDocuments({ name }) > 0
    ) return await uniqueRoomName()
    return name
}

module.exports = {
    roomName,
    uniqueRoomName,
}

if (module===require.main) {
    console.log(
        roomName()
    )
    console.log(
        uniqueRoomName()
    )
}
