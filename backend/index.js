const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');

const { PORT, DB_URI } = require('./config')
const routes  = require('./routes')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',
    credentials: true,
}))
app.use('/users', routes.user)

    ; (async () => {
        await mongoose.connect(
            DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(() => console.log('Connection established to DB'))
    })()

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
});
