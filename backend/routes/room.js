const { Router } = require('express')

const Room = require('../models/room')
const { uniqueRoomName } = require('../utils/rand-room')
const { authenticate } = require('../middlewares')

const routes = Router()

routes
    .use(authenticate)
    .post('/create', async (_req, res) => {
        const room = await uniqueRoomName()
        await Room.create({
            name: room,
            users: [{ _id: res.locals.sub }]
        })
        res.status(201).json({ room })
    })
    .post('/join', async (req, res) => {
        const { room: name } = req.body
        const _id = res.locals.sub
        const room = await Room.findOne({ name })
        if(
            !!room
        ) {
            res.status(400).json({ message: 'Room doesn\'t exist.' })
            return
        }
        if(!room.users.find((u) => u._id === _id))
            room.users.push({ _id })
        res.status(200).json(room)
    })
