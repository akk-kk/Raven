const { createServer } = require('http')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const { Server } = require('socket.io')

const { PORT, DB_URI } = require('./config')
const routes  = require('./routes')
const { handler } = require('./websockets')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',
    credentials: true,
}))

app.use('/users', routes.user)
app.use('/rooms', routes.room)

;(async () => {
    await mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log('Connection established to DB'))
    
    const server = createServer(app)
    const io = new Server(server)

    server.listen(PORT, () => {
        console.log(`App listening on ${PORT}`)
    });
    io.on('connection', handler)
})()
